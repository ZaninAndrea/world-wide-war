import React from "react"
import "./App.css"
import MainPage from "./components/MainPage"
import { getCountries } from "./mapData"
import Background from "./components/Background"
import BattlePage from "./components/BattlePage"
import CardsPage from "./components/CardsPage"

let socket

if (window.location.hostname === "localhost")
    socket = window.io("localhost:5000")
else socket = window.io()

setInterval(() => fetch("http://localhost:5000/keepalive"), 60000)

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            players: [],
            phase: "LOBBY",
            joinedGame: false,
            country: null,
            ownColor: null,
            myTurn: false,
            placements: {},
            startingCountries: [],
            name: "",
            playerNumber: null,
            map: getCountries(),
            page: 0,
            attackDices: [
                { n: 1, rolled: false, active: true },
                { n: 4, rolled: false, active: true },
                { n: 4, rolled: false, active: true },
            ],
            defenseDices: [
                { n: 3, rolled: false, active: false },
                { n: 2, rolled: false, active: false },
                { n: 6, rolled: false, active: false },
            ],
            attacker: null,
            defender: null,
            attackFrom: null,
            attackTo: null,
            bannerText: null,
            bannerKey: null,
            cards: [],
            tanksRemaining: null,
            objective: "",
            attackFromText: null,
            attackToText: null,
        }

        socket.on("new player", (player) => {
            this.setState(({ players }) => ({
                players: [...players, player],
            }))
        })
        socket.on("your objective", (value) =>
            this.setState({ objective: value })
        )
        socket.on("attackFromText", (val) =>
            this.setState({ attackFromText: val })
        )
        socket.on("attackToText", (val) => this.setState({ attackToText: val }))
        socket.on("game phase", (phase, param1, param2) => {
            if (phase === "ATTACK ROLLS") {
                this.setState({ phase, page: 1 })
            } else if (phase === "MOVE TROOPS" && this.state.myTurn) {
                let troops = ""

                while (
                    isNaN(parseInt(troops)) ||
                    parseInt(troops) !== parseFloat(troops) ||
                    parseInt(troops) <= 0 ||
                    parseInt(troops) < param1 ||
                    parseInt(troops) > param2
                ) {
                    troops = prompt("How many troops to move?")
                }

                socket.emit("move troops to conquered country", troops)
                this.setState({ page: 0 })
            } else {
                this.setState({ phase, placements: {} })
            }
        })
        socket.on("starting countries", (startingCountries) => {
            this.setState({ startingCountries: startingCountries })
        })
        socket.on("banner", (text, key) =>
            this.setState({ bannerText: text, bannerKey: key })
        )
        socket.on("map update", (country, data) => {
            this.setState(({ map }) => {
                let newMap = { ...map }
                newMap[country] = { ...newMap[country], ...data }

                return { map: newMap }
            })
        })
        socket.on("your turn", () => {
            this.setState({ myTurn: true })
        })
        socket.on("another player turn", (name) => {
            this.setState({ myTurn: false, placements: {} })
        })
        socket.on("notification", (content) => alert(content))
        socket.on("attack dices", (dices) =>
            this.setState({ attackDices: dices })
        )
        socket.on("defense dices", (dices) =>
            this.setState({ defenseDices: dices })
        )
        socket.on("tanks remaining", (tanksRemaining) =>
            this.setState({ tanksRemaining })
        )
        socket.on("attacker", (value) => this.setState({ attacker: value }))
        socket.on("defender", (value) => this.setState({ defender: value }))
        socket.on("attackFrom", (value) => this.setState({ attackFrom: value }))
        socket.on("attackTo", (value) => this.setState({ attackTo: value }))
        socket.on("your id", (id) => {
            if (this.state.players.length !== 0)
                this.setState({
                    name: this.state.players[id].name,
                })

            this.setState({ playerNumber: id })
        })
        socket.on("your cards", (cards) => this.setState({ cards }))
        socket.on("players update", (newPlayers) => {
            if (this.state.playerNumber !== null)
                this.setState({
                    name: newPlayers[this.state.playerNumber].name,
                })
            this.setState(({ players }) => ({
                players: newPlayers,
            }))
        })
    }

    getPlayer = (id) => {
        const playerFound = this.state.players.filter(
            (player) => player.id === id
        )[0]

        return playerFound || null
    }

    boardClick = (e) => {
        let country = e.target.id || null

        if (this.state.startingCountries.indexOf(country) !== -1) {
            if (
                this.state.phase === "SETUP" &&
                this.state.myTurn &&
                Object.values(this.state.placements).reduce(
                    (a, b) => a + b,
                    0
                ) < 5
            ) {
                this.setState(({ placements }) => {
                    const newPlacements = {
                        ...placements,
                        [country]: placements[country]
                            ? placements[country] + 1
                            : 1,
                    }

                    return {
                        placements: newPlacements,
                    }
                })
            } else if (
                this.state.phase === "TURN TANKS" &&
                this.state.myTurn &&
                Object.values(this.state.placements).reduce(
                    (a, b) => a + b,
                    0
                ) < this.state.tanksRemaining
            ) {
                this.setState(({ placements }) => {
                    const newPlacements = {
                        ...placements,
                        [country]: placements[country]
                            ? placements[country] + 1
                            : 1,
                    }

                    return {
                        placements: newPlacements,
                    }
                })
            }
        }
    }

    changeName = (e) => {
        this.setState({ name: e.target.value })
        socket.emit("change name", e.target.value)
    }

    changeColor = () => {
        socket.emit("change color")
    }

    onDragCountry = (from, to) => {
        if (this.state.map[to].owner !== this.state.map[from].owner) {
            socket.emit("attack country", from, to)
        } else {
            let troops = ""

            while (
                isNaN(parseInt(troops)) ||
                parseInt(troops) !== parseFloat(troops) ||
                parseInt(troops) <= 0 ||
                parseInt(troops) >= this.state.map[from].tanks
            ) {
                troops = prompt("How many troops to move?")
            }
            socket.emit("end turn movement", from, to, parseInt(troops))
        }
    }

    rollDice = (i) => {}
    componentDidUpdate() {
        window.scroll(0, 0)
    }
    goBackCardsPage = () => this.setState({ page: 0 })

    render() {
        const placedTanks = Object.values(this.state.placements).reduce(
            (a, b) => a + b,
            0
        )
        let nextActive =
            (this.state.phase === "ATTACK" ||
                this.state.phase === "TURN ENDING") &&
            this.state.myTurn

        let okActive =
            (this.state.phase === "SETUP" &&
                this.state.myTurn &&
                placedTanks === 5) ||
            (this.state.phase === "TURN TANKS" &&
                this.state.myTurn &&
                placedTanks === this.state.tanksRemaining)
        let okClick = () => {
            if (this.state.phase === "SETUP")
                socket.emit(
                    "place starting tanks",
                    Object.entries(this.state.placements)
                )

            if (this.state.phase === "TURN TANKS")
                socket.emit(
                    "place turn tanks",
                    Object.entries(this.state.placements)
                )
        }
        let nextClick = () => {
            if (
                this.state.phase === "ATTACK" ||
                this.state.phase === "TURN ENDING"
            )
                socket.emit("end turn")
        }

        let tempMap = { ...this.state.map }
        for (let placement of Object.entries(this.state.placements)) {
            tempMap[placement[0]] = {
                ...tempMap[placement[0]],
                tanks: tempMap[placement[0]].tanks + placement[1],
            }
        }

        return (
            <div id="app">
                <MainPage
                    page={this.state.page}
                    changeName={this.changeName}
                    changeColor={this.changeColor}
                    name={this.state.name}
                    playerNumber={this.state.playerNumber}
                    players={this.state.players}
                    phase={this.state.phase}
                    getPlayer={this.getPlayer}
                    onPlayClick={() => socket.emit("start game")}
                    boardClick={this.boardClick}
                    map={tempMap}
                    nextActive={nextActive}
                    nextClick={nextClick}
                    myTurn={this.state.myTurn}
                    onOkClick={okClick}
                    okActive={okActive}
                    cardsPageButtonClick={() => this.setState({ page: -1 })}
                    dragEnabled={
                        this.state.phase === "ATTACK" && this.state.myTurn
                    }
                    onDrag={this.onDragCountry}
                    key="main"
                    onGetCard={() => socket.emit("draw card")}
                    bannerText={this.state.bannerText}
                    bannerKey={this.state.bannerKey}
                    reconnectToPlayer={(n) => () => {
                        if (this.state.phase === "RECONNECT") {
                            console.log("reconnecting")
                            socket.emit("start reconnect", n)
                        }
                    }}
                    tanks={
                        this.state.myTurn
                            ? this.state.phase === "TURN TANKS" ||
                              this.state.phase === "SETUP"
                                ? this.state.tanksRemaining - placedTanks
                                : null
                            : null
                    }
                />
                <CardsPage
                    page={this.state.page}
                    cards={this.state.cards}
                    goBack={this.goBackCardsPage}
                    key="cardsPage"
                    playCards={(cards) => socket.emit("play cards", cards)}
                    objective={this.state.objective}
                    showObjective={() => socket.emit("show objective")}
                />
                <BattlePage
                    getPlayer={this.getPlayer}
                    playerNumber={this.state.playerNumber}
                    key="battle"
                    page={this.state.page}
                    attackDices={this.state.attackDices.map((dice) => ({
                        ...dice,
                        active:
                            this.state.phase === "ATTACK ROLLS" &&
                            this.state.attacker === this.state.playerNumber,
                    }))}
                    defenseDices={this.state.defenseDices.map((dice) => ({
                        ...dice,
                        active:
                            this.state.phase === "DEFENSE ROLLS" &&
                            this.state.defender === this.state.playerNumber,
                    }))}
                    updateAttackDice={(idx, newN) => {
                        socket.emit("rolled attack dice", idx, newN)
                        this.setState(({ attackDices }) => {
                            return {
                                attackDices: attackDices.map((val, i) =>
                                    i === idx
                                        ? { ...val, n: newN, rolled: true }
                                        : val
                                ),
                            }
                        })
                    }}
                    attackFromText={this.state.attackFromText}
                    attackToText={this.state.attackToText}
                    attackColor={
                        this.state.attackFrom &&
                        this.state.map[this.state.attackFrom].color
                    }
                    defenseColor={
                        this.state.attackTo &&
                        this.state.map[this.state.attackTo].color
                    }
                    updateDefenseDice={(idx, newN) => {
                        socket.emit("rolled defense dice", idx, newN)
                        this.setState(({ defenseDices }) => {
                            return {
                                defenseDices: defenseDices.map((val, i) =>
                                    i === idx
                                        ? { ...val, n: newN, rolled: true }
                                        : val
                                ),
                            }
                        })
                    }}
                    goBack={() =>
                        this.state.phase !== "DEFENSE ROLLS" &&
                        this.state.phase !== "ATTACK ROLLS"
                            ? this.setState({ page: 0 })
                            : ""
                    }
                    backActive={
                        this.state.phase !== "DEFENSE ROLLS" &&
                        this.state.phase !== "ATTACK ROLLS" &&
                        this.state.phase !== "LOBBY" &&
                        this.state.phase !== "RECONNECT"
                    }
                />
                <Background key="background" />
            </div>
        )
    }
}

export default App
