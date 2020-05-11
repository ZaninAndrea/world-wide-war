import React from "react"
import Countries from "./Countries"
import UI from "./UI"
import Board from "./Board"
import { countryCenters, getCountries, countries } from "../mapData"
import Banner from "./Banner"

let countryData = getCountries()
export default class MainPage extends React.Component {
    state = {
        dragging: false,
        from: null,
        fromCountry: null,
        to: null,
        hoverCountry: null,
        activeConnection: false,
        toCountry: null,
    }

    onMouseDown = (e) => {
        if (
            this.props.dragEnabled &&
            this.props.map[e.target.id] !== undefined &&
            this.props.map[e.target.id].owner === this.props.playerNumber
        ) {
            e.stopPropagation()
            const pt = this.svgElement.createSVGPoint()

            let x = e.touches ? e.touches[0].clientX : e.clientX
            let y = e.touches ? e.touches[0].clientY : e.clientY
            pt.x = x
            pt.y = y

            var cursorpt = pt.matrixTransform(
                this.svgElement.getScreenCTM().inverse()
            )
            this.setState({
                dragging: true,
                activeConnection: false,
                from: countryCenters[e.target.id],
                fromCountry: e.target.id,
                to: [cursorpt.x, cursorpt.y],
                hoverCountry: e.target.id,
            })
        }
    }
    mouseMove = (e) => {
        if (this.state.dragging) {
            e.stopPropagation()
            const pt = this.svgElement.createSVGPoint()

            let x = e.touches ? e.touches[0].clientX : e.clientX
            let y = e.touches ? e.touches[0].clientY : e.clientY

            pt.x = x
            pt.y = y

            var cursorpt = pt.matrixTransform(
                this.svgElement.getScreenCTM().inverse()
            )
            let countryName = document.elementFromPoint(x, y).id
            this.setState({
                to: [cursorpt.x, cursorpt.y],
                hoverCountry:
                    countries.indexOf(countryName) !== -1 ? countryName : null,
            })
        }
    }
    onMouseUp = (e) => {
        if (this.state.dragging) {
            e.stopPropagation()

            let x = e.touches ? e.touches[0].clientX : e.clientX
            let y = e.touches ? e.touches[0].clientY : e.clientY
            let countryName = document.elementFromPoint(x, y).id

            if (
                countries.indexOf(countryName) !== -1 &&
                countryData[this.state.fromCountry].neighbours.indexOf(
                    this.state.hoverCountry
                ) !== -1
            ) {
                this.props.onDrag(this.state.fromCountry, countryName)
                this.setState({
                    dragging: false,
                    toCountry: countryName,
                    activeConnection: true,
                    to: countryCenters[countryName],
                })
            } else {
                this.setState({
                    activeConnection: false,
                    dragging: false,
                    fromCountry: null,
                    to: null,
                    from: null,
                })
            }
        }
    }
    undoDrag = () => {
        if (this.state.dragging) {
            this.setState({
                dragging: false,
                from: null,
                to: null,
                fromCountry: null,
            })
        }
    }

    render() {
        const { props } = this
        let allowAction =
            this.state.hoverCountry &&
            this.state.fromCountry &&
            countryData[this.state.fromCountry].neighbours.indexOf(
                this.state.hoverCountry
            ) !== -1

        const actionFill = "#111"

        return (
            <svg
                viewBox="0 0 749.819 519.068"
                id="board"
                key="board"
                style={{
                    right: `${110 * props.page}vw`,
                    transform: `rotate(${-20 * props.page}deg)`,
                    top: `${Math.abs(20 * props.page)}vh`,
                }}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onMouseMove={this.mouseMove}
                onMouseLeave={this.undoDrag}
                onTouchStart={this.onMouseDown}
                onTouchMove={this.mouseMove}
                onTouchEnd={this.onMouseUp}
                ref={(el) => {
                    this.svgElement = el
                }}
            >
                <Board />
                {this.state.dragging && (
                    <>
                        <marker
                            id="circlemarker"
                            markerWidth="2"
                            markerHeight="2"
                            refX="1"
                            refY="1"
                            orient="auto"
                        >
                            <circle
                                cx="1"
                                cy="1"
                                r="1"
                                fill={allowAction ? actionFill : "#d5d5d3"}
                            />
                        </marker>
                        <line
                            x1={this.state.from[0]}
                            y1={this.state.from[1]}
                            x2={this.state.to[0]}
                            y2={this.state.to[1]}
                            stroke="black"
                            opacity={0.2}
                            strokeWidth={3}
                            strokeDasharray="6 6"
                            markerEnd="url(#circlemarker)"
                        />
                        <path
                            d={`M ${this.state.from[0]} ${
                                this.state.from[1]
                            } Q ${
                                (this.state.from[0] + this.state.to[0]) / 2
                            } ${
                                (this.state.from[1] + this.state.to[1]) / 2 - 25
                            }, ${this.state.to[0]} ${this.state.to[1]} `}
                            stroke={allowAction ? actionFill : "#d5d5d3"}
                            strokeWidth={3}
                            strokeDasharray="6 6"
                            markerEnd="url(#circlemarker)"
                            fill="transparent"
                        />
                    </>
                )}
                {this.state.activeConnection && (
                    <>
                        <line
                            x1={this.state.from[0]}
                            y1={this.state.from[1]}
                            x2={this.state.to[0]}
                            y2={this.state.to[1]}
                            stroke="black"
                            opacity={0.2}
                            strokeWidth={3}
                            strokeDasharray="6 6"
                            className="activeConnection"
                            markerEnd="url(#circlemarker)"
                        />
                        <path
                            d={`M ${this.state.from[0]} ${
                                this.state.from[1]
                            } Q ${
                                (this.state.from[0] + this.state.to[0]) / 2
                            } ${
                                (this.state.from[1] + this.state.to[1]) / 2 - 25
                            }, ${this.state.to[0]} ${this.state.to[1]} `}
                            stroke={allowAction ? actionFill : "#d5d5d3"}
                            strokeWidth={3}
                            strokeDasharray="6 6"
                            className="activeConnection"
                            fill="transparent"
                        />
                    </>
                )}
                <UI
                    reconnectToPlayer={props.reconnectToPlayer}
                    tanks={props.tanks}
                    circleClick={(e) => {}}
                    onNameChange={props.changeName}
                    onColorChange={props.changeColor}
                    name={props.name}
                    playerNumber={props.playerNumber}
                    players={props.players}
                    showOk={
                        (props.phase === "TURN TANKS" ||
                            props.phase === "SETUP") &&
                        props.myTurn
                    }
                    okActive={props.okActive}
                    onOkClick={props.onOkClick}
                    showGetCard={
                        props.phase !== "LOBBY" &&
                        props.phase !== "RECONNECT" &&
                        props.phase !== "SETUP"
                    }
                    showMyCards={
                        props.phase !== "LOBBY" && props.phase !== "RECONNECT"
                    }
                    showNext={
                        (props.phase === "ATTACK" ||
                            props.phase === "TURN ENDING" ||
                            this.state.phase === "CLICK NEXT") &&
                        props.myTurn
                    }
                    showPlay={props.phase === "LOBBY"}
                    map={props.map}
                    getPlayer={props.getPlayer}
                    playActive={
                        props.players.length > 2 &&
                        [...new Set(props.players.map((p) => p.color))]
                            .length === props.players.length &&
                        props.playerNumber !== null
                    }
                    onPlayClick={props.onPlayClick}
                    nextActive={props.nextActive}
                    onNextClick={props.nextClick}
                    onGetCard={props.onGetCard}
                    cardsPageButtonClick={props.cardsPageButtonClick}
                />
                <Countries onClick={props.boardClick} />
                {this.props.bannerKey && (
                    <Banner
                        text={this.props.bannerText}
                        key={"banner-" + this.props.bannerKey}
                    />
                )}
            </svg>
        )
    }
}
