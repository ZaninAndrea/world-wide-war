var express = require("express")
var app = express()
const cors = require("cors")
app.use(cors())
var http = require("http").createServer(app)
var io = require("socket.io")(http)
const {
    initializeGame,
    shuffle,
    rollDice,
    getCardsValue,
    italianNames,
} = require("./utilities")

let game = initializeGame()

app.use(express.static("public"))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/keepalive", function (req, res) {
    res.send("ok")
})

let palette = ["#ff222b", "#f6d32d", "#3584e4", "#f77500", "#33d17a", "#be7575"]

io.on("connection", function (socket) {
    function updatePlayers(target) {
        target.emit(
            "players update",
            game.players.map((player) => ({
                color: player.color,
                name: player.name,
                id: player.id,
                cardsCount: player.cards.length,
                disconnected: player.disconnected,
            }))
        )
    }
    updatePlayers(socket)

    if (game.players.length < 6 && game.phase === "LOBBY") {
        const usedIds = game.players.map((player) => player.id)
        const newId = [0, 1, 2, 3, 4, 5].filter(
            (id) => usedIds.indexOf(id) === -1
        )[0]

        socket.playerId = newId
        let newPlayer = {
            socket,
            name: "",
            color: palette[newId],
            id: newId,
            disconnected: false,
            cards: [],
            objective: game.objectives.shift(),
        }

        game.players.push(newPlayer)
        updatePlayers(io)
        socket.emit("your id", newId)
        socket.emit("your cards", newPlayer.cards)
        socket.emit("your objective", newPlayer.objective.text)
    } else {
        socket.emit("game phase", "RECONNECT")
    }

    socket.on("change name", function (newName) {
        if (socket.playerId === undefined) {
            socket.emit("notification", "You are not playing a game")
            return
        }
        const player = game.players.filter(
            (player) => player.id === socket.playerId
        )[0]

        player.name = newName
        updatePlayers(io)
    })
    socket.on("change color", function () {
        if (socket.playerId === undefined) {
            socket.emit("notification", "You are not playing a game")
            return
        }
        if (game.phase !== "LOBBY") return
        const player = game.players.filter(
            (player) => player.id === socket.playerId
        )[0]

        player.color =
            palette[(palette.indexOf(player.color) + 1) % palette.length]
        updatePlayers(io)
    })

    socket.on("start game", function () {
        if (game.players.length < 3 || game.players.length > 6) {
            socket.emit(
                "notification",
                "The game can be played by 3 to 6 players"
            )
            return
        }
        if (game.phase !== "LOBBY") {
            socket.emit("notification", "A game is already started")
            return
        }
        let usedColors = [...new Set(game.players.map((p) => p.color))]
        if (usedColors.length !== game.players.length) {
            socket.emit(
                "notification",
                "Two players cannot have the same color"
            )
            return
        }

        game.phase = "SETUP"
        game.players = shuffle(game.players)

        game.players = game.players.map((player, i) => ({
            ...player,
            id: i,
        }))
        for (let player of game.players) {
            player.socket.playerId = player.id
            player.socket.emit("your id", player.id)
            updatePlayers(player.socket)
        }
        game.turn = 0
        game.setupTurns = {
            3: 3 * 7,
            4: 4 * 6,
            5: 5 * 5,
            6: 6 * 4,
        }[game.players.length]

        let countries = shuffle(Object.keys(game.map))
        let countryAmount = {
            3: [14, 14, 14],
            4: [11, 11, 10, 10],
            5: [9, 9, 8, 8, 8],
            6: [7, 7, 7, 7, 7, 7],
        }
        io.emit("game phase", "SETUP")

        for (let i = 0; i < game.players.length; i++) {
            let playerCountries = countries.splice(
                0,
                countryAmount[game.players.length][i]
            )

            game.players[i].socket.emit("starting countries", playerCountries)
            game.players[i].startingCountries = playerCountries
            game.players[i].socket.emit(
                "tanks remaining",
                {
                    3: 35,
                    4: 30,
                    5: 25,
                    6: 20,
                }[game.players.length]
            )

            for (let country of playerCountries) {
                game.players[i].socket.emit("map update", country, {
                    owner: game.players[i].id,
                    color: game.players[i].color,
                })
            }

            if (i === 0) {
                game.players[i].socket.emit("your turn")
            } else {
                game.players[i].socket.emit(
                    "another player turn",
                    game.players[0].name
                )
            }
        }
    })

    socket.on("place starting tanks", (placements) => {
        if (socket.playerId === undefined) {
            socket.emit("notification", "You are not playing a game")
            return
        }
        if (game.phase !== "SETUP") {
            socket.emit("notification", "Tank placing phase has ended")
            return
        }

        const player = game.players.filter(
            (player) => player.id === socket.playerId
        )[0]

        if (game.players[game.turn % game.players.length].id !== player.id) {
            socket.emit("notification", "It's not your turn")
            return
        }

        let totalTanks = placements.reduce((acc, curr) => acc + curr[1], 0)
        if (totalTanks !== 5) {
            socket.emit("notification", "You have to place 5 tanks")
            return
        }

        for (let [country, tanks] of placements) {
            if (!game.map[country]) {
                socket.emit("notification", "Unknown territory")
                return
            }
            if (player.startingCountries.indexOf(country) === -1) {
                socket.emit("notification", "This territory is not yours")
                return
            }
        }

        for (let [country, tanks] of placements) {
            game.map[country].owner = player.id
            game.map[country].color = player.color
            game.map[country].tanks += tanks

            io.emit("map update", country, {
                owner: game.map[country].owner,
                tanks: game.map[country].tanks,
                color: game.map[country].color,
            })
        }

        game.turn += 1

        if (game.turn === game.setupTurns) {
            let emptyCountries = Object.values(game.map).filter(
                (country) => country.tanks === 0
            )

            if (emptyCountries.length !== 0) {
                io.emit(
                    "notification",
                    "You left some empty countries, restart the game"
                )
                return
            }

            game.turn = 0
            game.phase = "ATTACK"
            io.emit("game phase", "ATTACK")
            game.players[game.turn].socket.emit(
                "banner",
                " COMBATTI ",
                "combatti- " + game.turn
            )
        } else {
            game.players[game.turn % game.players.length].socket.emit(
                "tanks remaining",
                {
                    3: 35,
                    4: 30,
                    5: 25,
                    6: 20,
                }[game.players.length] -
                    5 * Math.floor(game.turn / game.players.length)
            )
        }

        for (let i = 0; i < game.players.length; i++) {
            if (i === game.turn % game.players.length) {
                game.players[i].socket.emit("your turn")
            } else {
                game.players[i].socket.emit(
                    "another player turn",
                    game.players[game.turn % game.players.length].name
                )
            }
        }
    })

    socket.on("attack country", (from, to) => {
        if (socket.playerId === undefined) {
            socket.emit("notification", "You are not playing a game")
            return
        }
        if (game.phase !== "ATTACK") {
            socket.emit("notification", "This is not the attack phase")
            return
        }

        const player = game.players.filter(
            (player) => player.id === socket.playerId
        )[0]

        if (game.players[game.turn % game.players.length].id !== player.id) {
            socket.emit("notification", "It's not your turn")
            return
        }

        if (game.map[from].neighbours.indexOf(to) === -1) {
            socket.emit(
                "notification",
                "The state you are trying to attack is not a neighbour"
            )
            return
        }
        if (game.map[from].owner === game.map[to].owner) {
            socket.emit("notification", "You cannot attack yourself")
            return
        }
        const maxAttackTanks =
            game.map[from].tanks > 3 ? 3 : game.map[from].tanks - 1

        if (maxAttackTanks === 0) {
            socket.emit(
                "notification",
                "You cannot attack from a territory with 1 tank"
            )
            return
        }

        game.attackFrom = from
        game.attackTo = to
        io.emit("attackFrom", from)
        io.emit("attackTo", to)
        io.emit("attackFromText", italianNames[from])
        io.emit("attackToText", italianNames[to])
        io.emit("attacker", game.map[from].owner)
        io.emit("defender", game.map[to].owner)

        game.attackDices = [
            { n: rollDice(), rolled: false },
            { n: rollDice(), rolled: false },
            { n: rollDice(), rolled: false },
        ].slice(0, maxAttackTanks)
        game.defenseDices = [
            { n: rollDice(), rolled: false },
            { n: rollDice(), rolled: false },
            { n: rollDice(), rolled: false },
        ].slice(0, Math.min(game.map[to].tanks, 3))

        io.emit("attack dices", game.attackDices)
        io.emit("defense dices", game.defenseDices)

        game.phase = "ATTACK ROLLS"
        io.emit("game phase", "ATTACK ROLLS")
    })

    socket.on("rolled attack dice", (i, n) => {
        if (game.phase !== "ATTACK ROLLS") {
            socket.emit("notification", "It's not time to roll attack dices")
            return
        }

        if (game.map[game.attackFrom].owner !== socket.playerId) {
            socket.emit("notification", "It's not your turn")
            return
        }
        if (i >= game.attackDices.length || i < 0) {
            socket.emit(
                "notification",
                `You only have ${game.attackDices.length} dices`
            )
            return
        }
        if (game.attackDices[i].rolled) {
            socket.emit("Cannot re-roll a dice")
            return
        }

        game.attackDices[i].n = n
        game.attackDices[i].rolled = true
        io.emit("attack dices", game.attackDices)

        const allRolled = game.attackDices.reduce(
            (acc, curr) => acc && curr.rolled,
            true
        )

        if (allRolled) {
            game.phase = "DEFENSE ROLLS"
            io.emit("game phase", "DEFENSE ROLLS")
        }
    })

    socket.on("rolled defense dice", (i, n) => {
        if (game.phase !== "DEFENSE ROLLS") {
            socket.emit("notification", "It's not time to roll defense dices")
            return
        }
        if (i >= game.defenseDices.length || i < 0) {
            socket.emit(
                "notification",
                `You only have ${game.attackDices.length} dices`
            )
            return
        }
        if (game.defenseDices[i].rolled) {
            socket.emit("Cannot re-roll a dice")
            return
        }

        if (game.map[game.attackTo].owner !== socket.playerId) {
            socket.emit("notification", "It's not your turn")
            return
        }

        game.defenseDices[i].n = n
        game.defenseDices[i].rolled = true
        io.emit("defense dices", game.defenseDices)

        const allRolled = game.defenseDices.reduce(
            (acc, curr) => acc && curr.rolled,
            true
        )

        if (allRolled) {
            let attackRolls = game.attackDices
                .map(({ n }, i) => ({ n, i }))
                .sort((a, b) => (a.n < b.n ? 1 : a.n === b.n ? 0 : -1))
            let defenseRolls = game.defenseDices
                .map(({ n }, i) => ({ n, i }))
                .sort((a, b) => (a.n < b.n ? 1 : a.n === b.n ? 0 : -1))

            let losingAttackIds = []
            let losingDefenseIds = []
            for (
                let i = 0;
                i < attackRolls.length && i < defenseRolls.length;
                i++
            ) {
                if (attackRolls[i].n <= defenseRolls[i].n) {
                    losingAttackIds.push(i)
                    game.attackDices[attackRolls[i].i].lost = true
                } else {
                    losingDefenseIds.push(i)
                    game.defenseDices[defenseRolls[i].i].lost = true
                }
            }
            io.emit("defense dices", game.defenseDices)
            io.emit("attack dices", game.attackDices)

            game.map[game.attackFrom].tanks -= losingAttackIds.length
            game.map[game.attackTo].tanks -= losingDefenseIds.length

            io.emit("map update", game.attackFrom, {
                owner: game.map[game.attackFrom].owner,
                tanks: game.map[game.attackFrom].tanks,
                color: game.map[game.attackFrom].color,
            })
            io.emit("map update", game.attackTo, {
                owner: game.map[game.attackTo].owner,
                tanks: game.map[game.attackTo].tanks,
                color: game.map[game.attackTo].color,
            })
            if (game.map[game.attackTo].tanks <= 0) {
                game.phase = "MOVE TROOPS"
                game.minTroops =
                    game.attackDices.length - losingAttackIds.length
                io.emit(
                    "game phase",
                    "MOVE TROOPS",
                    game.minTroops,
                    game.map[game.attackFrom].tanks - 1
                )
                game.wonAttack = true

                game.map[game.attackTo].owner = game.map[game.attackFrom].owner
                game.map[game.attackTo].color = game.map[game.attackFrom].color

                io.emit("map update", game.attackTo, {
                    owner: game.map[game.attackTo].owner,
                    tanks: game.map[game.attackTo].tanks,
                    color: game.map[game.attackTo].color,
                })
            } else {
                game.phase = "ATTACK"
                io.emit("game phase", "ATTACK")
            }
        }
    })

    socket.on("move troops to conquered country", (n) => {
        n = parseInt(n)
        if (game.phase !== "MOVE TROOPS") {
            socket.emit("notification", "It's not time to move troops")
            return
        } else if (n < game.minTroops) {
            socket.emit("You have to move more troops")
            return
        } else if (game.map[game.attackFrom].tanks <= n) {
            socket.emit("Move less troops")
            return
        }

        if (
            game.players[game.turn % game.players.length].id !== socket.playerId
        ) {
            socket.emit("notification", "It's not your turn")
            return
        }

        game.map[game.attackTo].owner = game.map[game.attackFrom].owner
        game.map[game.attackTo].color = game.map[game.attackFrom].color
        game.map[game.attackTo].tanks = n

        io.emit("map update", game.attackTo, {
            owner: game.map[game.attackTo].owner,
            tanks: game.map[game.attackTo].tanks,
            color: game.map[game.attackTo].color,
        })

        game.map[game.attackFrom].tanks -= n

        io.emit("map update", game.attackFrom, {
            owner: game.map[game.attackFrom].owner,
            tanks: game.map[game.attackFrom].tanks,
            color: game.map[game.attackFrom].color,
        })

        game.phase = "ATTACK"
        io.emit("game phase", "ATTACK")
    })

    socket.on("end turn movement", (from, to, _n) => {
        n = parseInt(_n)
        if (
            game.players[game.turn % game.players.length].id !== socket.playerId
        ) {
            socket.emit("notification", "It's not your turn")
            return
        } else if (game.map[from].tanks <= n) {
            socket.emit("notification", "Cannot move so many tanks")
            return
        } else if (
            game.map[from].owner !== socket.playerId ||
            game.map[to].owner !== socket.playerId
        ) {
            socket.emit("notification", "You do not own both territories")
            return
        } else if (game.phase !== "ATTACK") {
            socket.emit("notification", "You cannot move tanks now")
            return
        } else if (
            isNaN(parseInt(_n)) ||
            parseInt(_n) !== parseFloat(_n) ||
            parseInt(_n) <= 0 ||
            parseInt(_n) >= game.map[from].tanks
        ) {
            socket.emit("invalid troop amount")
            return
        }

        game.map[from].tanks -= n
        game.map[to].tanks += n

        io.emit("map update", from, {
            owner: game.map[from].owner,
            tanks: game.map[from].tanks,
            color: game.map[from].color,
        })
        io.emit("map update", to, {
            owner: game.map[to].owner,
            tanks: game.map[to].tanks,
            color: game.map[to].color,
        })

        game.phase = "TURN ENDING"
        io.emit("game phase", "TURN ENDING")
    })

    socket.on("draw card", () => {
        if (
            game.players[game.turn % game.players.length].id !== socket.playerId
        ) {
            socket.emit("notification", "It's not your turn")
            return
        } else if (!game.wonAttack) {
            socket.emit("notification", "You haven't won an attack")
            return
        } else if (game.phase === "CLICK NEXT") {
            socket.emit("notification", "You have already drawn a card")
            return
        }

        const i = Math.floor(game.deck.length * Math.random())
        const drawnCard = game.deck.splice(i, 1)[0]

        game.players[game.turn % game.players.length].cards.push(drawnCard)
        socket.emit(
            "your cards",
            game.players[game.turn % game.players.length].cards
        )

        game.phase = "CLICK NEXT"
        io.emit("game phase", "CLICK NEXT")
        updatePlayers(io)
    })

    socket.on("end turn", () => {
        if (
            game.players[game.turn % game.players.length].id !== socket.playerId
        ) {
            socket.emit("notification", "It's not your turn")
            return
        }

        game.turn = game.turn + 1
        game.wonAttack = false
        for (let i = 0; i < game.players.length; i++) {
            if (i === game.turn % game.players.length) {
                game.players[i].socket.emit("your turn")
                game.players[i].socket.emit(
                    "banner",
                    " COMBATTI ",
                    "combatti- " + game.turn
                )
            } else {
                game.players[i].socket.emit(
                    "another player turn",
                    game.players[game.turn % game.players.length].name
                )
            }
        }

        if (game.turn < game.players.length) {
            game.phase = "ATTACK"
            io.emit("game phase", "ATTACK")
        } else {
            game.phase = "TURN TANKS"
            io.emit("game phase", "TURN TANKS")
            let currentPlayerId = game.turn % game.players.length
            const tanksRemaining =
                Math.floor(
                    Object.values(game.map).filter(
                        (country) => country.owner === currentPlayerId
                    ).length / 3
                ) + 1
            game.tanksRemaining = tanksRemaining
            game.players[currentPlayerId].socket.emit(
                "tanks remaining",
                tanksRemaining
            )
        }
    })

    socket.on("start reconnect", function (n) {
        if (socket.playerId !== undefined) {
            socket.emit("notification", "you are already in game")
            return
        } else if (game.players.length < n) {
            socket.emit("notificaiton", "this player does not exist")
            return
        } else if (!game.players[n].disconnected) {
            socket.emit("notification", "this player is not disconnected")
            return
        }
        socket.playerId = n

        game.players = game.players.map((player) =>
            player.id !== socket.playerId
                ? player
                : {
                      ...player,
                      disconnected: false,
                      socket: socket,
                  }
        )
        updatePlayers(io)
        let player = game.players.filter(
            (player) => player.id === socket.playerId
        )[0]

        socket.emit("your id", n)
        socket.emit("your cards", player.cards)
        socket.emit("your objective", player.objective.text)

        if (game.phase === "SETUP") {
            socket.emit("starting countries", player.startingCountries)
            socket.emit(
                "tanks remaining",
                {
                    3: 35,
                    4: 30,
                    5: 25,
                    6: 20,
                }[game.players.length]
            )
            for (let country of player.startingCountries) {
                socket.emit("map update", country, {
                    owner: player.id,
                    color: player.color,
                    tanks: game.map[country].tanks,
                })
            }
        } else {
            socket.emit("attackFrom", game.attackFrom)
            socket.emit("attackTo", game.attackTo)
            socket.emit(
                "attackFromText",
                game.attackFrom && italianNames[game.attackFrom]
            )
            socket.emit(
                "attackToText",
                game.attackTo && italianNames[game.attackTo]
            )
            socket.emit(
                "attacker",
                game.attackFrom && game.map[game.attackFrom].owner
            )
            socket.emit(
                "defender",
                game.attackTo && game.map[game.attackTo].owner
            )
            socket.emit("tanks remaining", game.tanksRemaining)

            io.emit("attack dices", game.attackDices)
            io.emit("defense dices", game.defenseDices)

            for (let country of Object.keys(game.map)) {
                socket.emit("map update", country, {
                    owner: game.map[country].owner,
                    color: game.map[country].color,
                    tanks: game.map[country].tanks,
                })
            }
        }

        if (game.turn % game.players.length === n) {
            socket.emit("your turn")
            socket.emit("banner", " COMBATTI ", "combatti- " + game.turn)
        } else {
            socket.emit(
                "another player turn",
                game.players[game.turn % game.players.length].name
            )
        }

        socket.emit("game phase", game.phase)
    })

    socket.on("place turn tanks", (placements) => {
        if (socket.playerId === undefined) {
            socket.emit("notification", "You are not playing a game")
            return
        }
        if (game.phase !== "TURN TANKS") {
            socket.emit("notification", "Tank placing phase has ended")
            return
        }

        const player = game.players.filter(
            (player) => player.id === socket.playerId
        )[0]

        if (game.players[game.turn % game.players.length].id !== player.id) {
            socket.emit("notification", "It's not your turn")
            return
        }

        let totalTanks = placements.reduce((acc, curr) => acc + curr[1], 0)
        if (totalTanks !== game.tanksRemaining) {
            socket.emit(
                "notification",
                `You have to place ${game.tanksRemaining} tanks`
            )
            return
        }

        for (let [country, tanks] of placements) {
            if (!game.map[country]) {
                socket.emit("notification", "Unknown territory")
                return
            }
            if (game.map[country].owner !== player.id) {
                socket.emit("notification", "This territory is not yours")
                return
            }
        }

        game.phase = "ATTACK"
        io.emit("game phase", "ATTACK")
        for (let [country, tanks] of placements) {
            game.map[country].owner = player.id
            game.map[country].tanks += tanks

            io.emit("map update", country, {
                owner: game.map[country].owner,
                tanks: game.map[country].tanks,
                color: player.color,
            })
        }
    })

    socket.on("play cards", (cardIds) => {
        if (socket.playerId === undefined) {
            socket.emit("notification", "You are not playing a game")
            return
        }
        if (game.phase !== "TURN TANKS") {
            socket.emit("notification", "Tank placing phase has ended")
            return
        }

        const player = game.players.filter(
            (player) => player.id === socket.playerId
        )[0]

        if (game.players[game.turn % game.players.length].id !== player.id) {
            socket.emit("notification", "It's not your turn")
            return
        }

        let cards = cardIds.map((id) => player.cards[id])
        if (getCardsValue(cards) === -1) {
            socket.emit(
                "notification",
                "This combination of cards is not valid"
            )
            return
        }

        game.tanksRemaining += getCardsValue(cards)
        game.tanksRemaining +=
            cards
                .filter((card) => card.type !== "jolly")
                .map((card) => card.country)
                .filter((country) => game.map[country].owner === player.id)
                .length * 2
        player.socket.emit("tanks remaining", game.tanksRemaining)
        player.cards = player.cards.filter((_, i) => cardIds.indexOf(i) === -1)
        player.socket.emit("your cards", player.cards)
        updatePlayers(io)
    })

    socket.on("show objective", () => {
        if (socket.playerId === undefined) {
            socket.emit("notification", "You are not playing a game")
            return
        }

        const player = game.players.filter(
            (player) => player.id === socket.playerId
        )[0]

        io.emit(
            "notification",
            `${player.name}'s obejctive is "${player.objective.text}"`
        )
    })

    socket.on("disconnect", function () {
        if (socket.playerId === undefined) return

        const player = game.players.filter(
            (player) => player.id === socket.playerId
        )[0]

        if (game.phase === "LOBBY") {
            game.players = game.players.filter(
                (player) => player.id !== socket.playerId
            )
            game.players = game.players.map((player, i) => ({
                ...player,
                id: i,
            }))
            for (let player of game.players) {
                player.socket.playerId = player.id
                player.socket.emit("your id", player.id)
                updatePlayers(player.socket)
            }
        } else {
            game.players = game.players.map((player) =>
                player.id !== socket.playerId
                    ? player
                    : { ...player, disconnected: true }
            )
            updatePlayers(io)
        }

        if (
            game.players.filter((player) => !player.disconnected).length === 0
        ) {
            game = initializeGame()
        }
    })
})

http.listen(process.env.PORT || 5000, function () {
    console.log(`[${new Date().toISOString()}] listening on *:5000`)
})
