import React from "react"
import Card from "./Card"
import CardObiettivo from "./CardObiettivo"

let allowedTypes = [
    "cannone-cannone-cannone",
    "fante-fante-fante",
    "cavallo-cavallo-cavallo",
    "cannone-cavallo-fante",
    "cannone-cannone-jolly",
    "fante-fante-jolly",
    "cavallo-cavallo-jolly",
]
export default class CardsPage extends React.Component {
    state = { cardsPage: 0, selectedCards: [] }

    selectCard = (n) => () => {
        if (this.state.selectedCards.length < 3) {
            let newSelectedCards = [
                ...new Set([
                    ...this.state.selectedCards,
                    n + this.state.cardsPage * 8,
                ]),
            ]

            if (newSelectedCards.length === 3) {
                let types = newSelectedCards
                    .map((n) => this.props.cards[n].type)
                    .sort()
                    .join("-")

                if (allowedTypes.indexOf(types) !== -1) {
                    this.props.playCards(newSelectedCards)
                    setTimeout(() => this.setState({ selectedCards: [] }), 300)
                }
            }
            this.setState({
                selectedCards: newSelectedCards,
            })
        }
    }

    render() {
        return (
            <svg
                id="cards-page"
                viewBox="0 0 749.819 519.068"
                style={{
                    right: `${110 * (this.props.page + 1)}vw`,
                    transform: `rotate(${-20 * (this.props.page + 1)}deg)`,
                    top: `${Math.abs(20 * (this.props.page + 1))}vh`,
                }}
            >
                <Card
                    type={
                        this.props.cards.length > 0 + this.state.cardsPage * 8
                            ? this.props.cards[0 + this.state.cardsPage * 8]
                                  .type
                            : null
                    }
                    text={
                        this.props.cards.length > 0 + this.state.cardsPage * 8
                            ? this.props.cards[0 + this.state.cardsPage * 8]
                                  .text
                            : null
                    }
                    onClick={this.selectCard(0)}
                    transform="translate(0 0)"
                />
                <Card
                    type={
                        this.props.cards.length > 1 + this.state.cardsPage * 8
                            ? this.props.cards[1 + this.state.cardsPage * 8]
                                  .type
                            : null
                    }
                    text={
                        this.props.cards.length > 1 + this.state.cardsPage * 8
                            ? this.props.cards[1 + this.state.cardsPage * 8]
                                  .text
                            : null
                    }
                    onClick={this.selectCard(1)}
                    transform="translate(130 0)"
                />
                <Card
                    type={
                        this.props.cards.length > 2 + this.state.cardsPage * 8
                            ? this.props.cards[2 + this.state.cardsPage * 8]
                                  .type
                            : null
                    }
                    text={
                        this.props.cards.length > 2 + this.state.cardsPage * 8
                            ? this.props.cards[2 + this.state.cardsPage * 8]
                                  .text
                            : null
                    }
                    onClick={this.selectCard(2)}
                    transform="translate(260 0)"
                />
                <Card
                    type={
                        this.props.cards.length > 3 + this.state.cardsPage * 8
                            ? this.props.cards[3 + this.state.cardsPage * 8]
                                  .type
                            : null
                    }
                    text={
                        this.props.cards.length > 3 + this.state.cardsPage * 8
                            ? this.props.cards[3 + this.state.cardsPage * 8]
                                  .text
                            : null
                    }
                    onClick={this.selectCard(3)}
                    transform="translate(390 0)"
                />
                <Card
                    type={
                        this.props.cards.length > 4 + this.state.cardsPage * 8
                            ? this.props.cards[4 + this.state.cardsPage * 8]
                                  .type
                            : null
                    }
                    text={
                        this.props.cards.length > 4 + this.state.cardsPage * 8
                            ? this.props.cards[4 + this.state.cardsPage * 8]
                                  .text
                            : null
                    }
                    onClick={this.selectCard(4)}
                    transform="translate(0 154)"
                />
                <Card
                    type={
                        this.props.cards.length > 5 + this.state.cardsPage * 8
                            ? this.props.cards[5 + this.state.cardsPage * 8]
                                  .type
                            : null
                    }
                    text={
                        this.props.cards.length > 5 + this.state.cardsPage * 8
                            ? this.props.cards[5 + this.state.cardsPage * 8]
                                  .text
                            : null
                    }
                    onClick={this.selectCard(5)}
                    transform="translate(130 154)"
                />
                <Card
                    type={
                        this.props.cards.length > 6 + this.state.cardsPage * 8
                            ? this.props.cards[6 + this.state.cardsPage * 8]
                                  .type
                            : null
                    }
                    text={
                        this.props.cards.length > 6 + this.state.cardsPage * 8
                            ? this.props.cards[6 + this.state.cardsPage * 8]
                                  .text
                            : null
                    }
                    onClick={this.selectCard(6)}
                    transform="translate(260 154)"
                />
                <Card
                    type={
                        this.props.cards.length > 7 + this.state.cardsPage * 8
                            ? this.props.cards[7 + this.state.cardsPage * 8]
                                  .type
                            : null
                    }
                    text={
                        this.props.cards.length > 7 + this.state.cardsPage * 8
                            ? this.props.cards[7 + this.state.cardsPage * 8]
                                  .text
                            : null
                    }
                    onClick={this.selectCard(7)}
                    transform="translate(390 154)"
                />

                <Card
                    type={
                        this.state.selectedCards.length > 2
                            ? this.props.cards[this.state.selectedCards[2]].type
                            : null
                    }
                    text={
                        this.state.selectedCards.length > 2
                            ? this.props.cards[this.state.selectedCards[2]].text
                            : null
                    }
                    onClick={() =>
                        this.state.selectedCards.length > 2 &&
                        this.setState(({ selectedCards }) => ({
                            selectedCards: selectedCards.filter(
                                (n, i) => i !== 2
                            ),
                        }))
                    }
                    transform="translate(330 280) rotate(20)"
                />
                <Card
                    type={
                        this.state.selectedCards.length > 1
                            ? this.props.cards[this.state.selectedCards[1]].type
                            : null
                    }
                    text={
                        this.state.selectedCards.length > 1
                            ? this.props.cards[this.state.selectedCards[1]].text
                            : null
                    }
                    onClick={() =>
                        this.state.selectedCards.length > 1 &&
                        this.setState(({ selectedCards }) => ({
                            selectedCards: selectedCards.filter(
                                (n, i) => i !== 1
                            ),
                        }))
                    }
                    transform="translate(195 315)"
                />
                <Card
                    type={
                        this.state.selectedCards.length > 0
                            ? this.props.cards[this.state.selectedCards[0]].type
                            : null
                    }
                    text={
                        this.state.selectedCards.length > 0
                            ? this.props.cards[this.state.selectedCards[0]].text
                            : null
                    }
                    onClick={() =>
                        this.state.selectedCards.length > 0 &&
                        this.setState(({ selectedCards }) => ({
                            selectedCards: selectedCards.filter(
                                (n, i) => i !== 0
                            ),
                        }))
                    }
                    transform="translate(80 400) rotate(-20)"
                />
                <CardObiettivo
                    text={this.props.objective}
                    showObjective={this.props.showObjective}
                />
                <g
                    fontWeight={400}
                    fontSize={14.206}
                    fontFamily="sans-serif"
                    textAnchor="end"
                    fill="#deddda"
                >
                    <text
                        style={{
                            lineHeight: 1.25,
                            textAlign: "end",
                        }}
                        x={655.941}
                        y={374.855}
                        transform="translate(0 -10) rotate(-15 822.114 421.605)"
                    >
                        <tspan
                            x={655.941}
                            y={374.855}
                            style={{
                                textAlign: "end",
                            }}
                            fontFamily="Quicksand"
                        >
                            {"3x CANNONE"}
                        </tspan>
                        <tspan
                            x={655.941}
                            y={392.613}
                            style={{
                                textAlign: "end",
                            }}
                            fontFamily="Quicksand"
                        >
                            {"3x FANTE"}
                        </tspan>
                        <tspan
                            x={655.941}
                            y={410.371}
                            style={{
                                textAlign: "end",
                            }}
                            fontFamily="Quicksand"
                        >
                            {"3x CAVALLO"}
                        </tspan>
                        <tspan
                            x={655.941}
                            y={428.371}
                            style={{
                                textAlign: "end",
                            }}
                            fontFamily="Quicksand"
                        >
                            {"TRIS"}
                        </tspan>
                        <tspan
                            x={655.941}
                            y={446.371}
                            style={{
                                textAlign: "end",
                            }}
                            fontFamily="Quicksand"
                        >
                            {"JOLLY + COPPIA"}
                        </tspan>
                    </text>
                    <text
                        y={374.855}
                        x={662.21}
                        style={{
                            lineHeight: 1.25,
                            textAlign: "end",
                        }}
                        transform="translate(0 -10) rotate(-15 822.114 421.605)"
                    >
                        <tspan
                            style={{
                                textAlign: "start",
                            }}
                            y={374.855}
                            x={662.21}
                            fontFamily="Quicksand"
                            textAnchor="start"
                        >
                            {"= 4 carri"}
                        </tspan>
                        <tspan
                            style={{
                                textAlign: "start",
                            }}
                            y={392.613}
                            x={662.21}
                            fontFamily="Quicksand"
                            textAnchor="start"
                        >
                            {"= 6 carri"}
                        </tspan>
                        <tspan
                            style={{
                                textAlign: "start",
                            }}
                            y={410.371}
                            x={662.21}
                            fontFamily="Quicksand"
                            textAnchor="start"
                        >
                            {"= 8 carri"}
                        </tspan>
                        <tspan
                            style={{
                                textAlign: "start",
                            }}
                            y={428.371}
                            x={662.21}
                            fontFamily="Quicksand"
                            textAnchor="start"
                        >
                            {"= 10 carri"}
                        </tspan>
                        <tspan
                            style={{
                                textAlign: "start",
                            }}
                            y={446.371}
                            x={662.21}
                            fontFamily="Quicksand"
                            textAnchor="start"
                        >
                            {"= 12 carri"}
                        </tspan>
                    </text>
                </g>
                {this.props.cards.length > 7 && (
                    <g
                        transform="matrix(-1 0 0 1 772.108 0)"
                        id="backButton"
                        onClick={() =>
                            this.state.cardsPage !== 0 &&
                            this.setState(({ cardsPage }) => ({
                                cardsPage: cardsPage - 1,
                            }))
                        }
                    >
                        <circle
                            cx={668.405}
                            cy={178.443}
                            r={14.174}
                            fill={
                                this.state.cardsPage !== 0
                                    ? "#57e389"
                                    : "#c0bfbc"
                            }
                            fillRule="evenodd"
                        />
                        <circle
                            r={14.174}
                            cy={177.383}
                            cx={670.703}
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M666.817 171.385l8.964 5.474-8.236 6.132"
                            fill="none"
                            stroke="#000"
                        />
                    </g>
                )}
                {this.props.cards.length > 7 && (
                    <g
                        id="nextButton"
                        onClick={() =>
                            this.state.cardsPage + 1 <=
                                this.props.cards.length / 8 &&
                            this.setState(({ cardsPage }) => ({
                                cardsPage: cardsPage + 1,
                            }))
                        }
                    >
                        <circle
                            r={14.174}
                            cy={178.443}
                            cx={654.703}
                            fill={
                                this.state.cardsPage + 1 <=
                                this.props.cards.length / 8
                                    ? "#57e389"
                                    : "#c0bfbc"
                            }
                            fillRule="evenodd"
                        />
                        <circle
                            cx={652.405}
                            cy={177.383}
                            r={14.174}
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M648.817 171.385l8.964 5.474-8.236 6.132"
                            fill="none"
                            stroke="#000"
                        />
                    </g>
                )}
                <g
                    transform="translate(670 20)"
                    id="g1371"
                    fillOpacity={1}
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={this.props.goBack}
                >
                    <circle
                        id="circle1363"
                        cx={1}
                        cy={1}
                        r={14.174}
                        fill={"#fff"}
                    />
                    <circle
                        r={14.174}
                        cy={0}
                        cx={0}
                        id="circle1365"
                        fill="none"
                        stroke="#000"
                    />
                    <path
                        id="path1373"
                        d="M-9 0.5l15.556-.265"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit={4}
                        strokeDasharray="none"
                        strokeDashoffset={0}
                    />
                    <path
                        id="path1375"
                        d="M3 -4l3.978 4.33-4.42 3.978"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit={4}
                        strokeDasharray="none"
                        strokeDashoffset={0}
                    />
                </g>
            </svg>
        )
    }
}
