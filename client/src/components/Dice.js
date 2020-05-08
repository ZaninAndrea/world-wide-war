import React from "react"

function randomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1
}

export default class Dice extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            number: props.number,
            lost: props.lost,
        }
    }

    onClick = () => {
        if (this.props.active) this.props.updateDice(randomDiceNumber())
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.number !== this.props.number) {
            setTimeout(() => {
                this.setState({ number: nextProps.number })
            }, 120)
        }
        if (nextProps.lost !== this.props.lost) {
            setTimeout(() => {
                this.setState({ lost: nextProps.lost })
            }, 300)
        }

        return true
    }

    render() {
        const { props } = this
        const fill = this.state.lost
            ? "#000"
            : props.side === "attack"
            ? "#ed333b"
            : "#3584e4"

        if (this.state.number === 1)
            return (
                <g
                    transform={`translate(${props.translate})`}
                    onClick={this.onClick}
                >
                    <g
                        className={
                            props.rolled
                                ? props.side === "attack"
                                    ? "rolled-translate"
                                    : "rolled-translate-back"
                                : ""
                        }
                    >
                        <g className={props.rolled ? "rolled-rotate" : ""}>
                            <g
                                transform={`rotate(${props.rotate} 0 0) translate(-5 -5)`}
                            >
                                <path
                                    d="M2.282.831L7.254.827c.824 0 1.518.633 1.517 1.457L8.762 7.18c-.001.812-.623 1.478-1.434 1.494l-4.937.1A1.461 1.461 0 01.897 7.342l-.1-4.933C.781 1.584 1.46.831 2.282.831z"
                                    fill={fill}
                                />
                                <path
                                    d="M1.843.356L6.814.352c.824 0 1.519.633 1.517 1.457l-.008 4.898C8.32 7.517 7.7 8.184 6.888 8.2l-4.936.1A1.461 1.461 0 01.458 6.867l-.1-4.932C.34 1.11 1.019.357 1.843.356z"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={0.265}
                                />
                                <path d="M5.282 4.306a.876.876 0 01-.847.882c-.47.01-.798-.38-.807-.849-.01-.469.303-.84.772-.85.47-.01.872.348.882.817z" />
                            </g>
                        </g>
                    </g>
                </g>
            )

        if (this.state.number === 2)
            return (
                <g
                    transform={`translate(${props.translate})`}
                    onClick={this.onClick}
                >
                    <g
                        className={
                            props.rolled
                                ? props.side === "attack"
                                    ? "rolled-translate"
                                    : "rolled-translate-back"
                                : ""
                        }
                    >
                        <g className={props.rolled ? "rolled-rotate" : ""}>
                            <g
                                transform={`rotate(${props.rotate} 0 0) translate(-5 -5)`}
                            >
                                <path
                                    d="M2.282.83L7.254.828c.824 0 1.518.633 1.517 1.457L8.762 7.18c-.001.812-.623 1.478-1.434 1.494l-4.937.1A1.461 1.461 0 01.897 7.342l-.1-4.933C.781 1.584 1.46.831 2.282.831z"
                                    fill={fill}
                                />
                                <path
                                    d="M1.843.356L6.814.352c.824 0 1.519.633 1.517 1.457l-.008 4.898C8.32 7.517 7.7 8.184 6.888 8.2l-4.936.1A1.461 1.461 0 01.458 6.867l-.1-4.933C.34 1.11 1.019.356 1.843.356z"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={0.265}
                                />
                                <path d="M3.63 2.893a.876.876 0 01-.848.882c-.469.01-.797-.379-.807-.848-.01-.47.304-.841.773-.85.469-.01.872.347.881.816zM6.625 6.999a.876.876 0 01-1.05-.627c-.115-.455.19-.862.645-.977.455-.115.888.106 1.003.56.114.456-.143.929-.598 1.044z" />
                            </g>
                        </g>
                    </g>
                </g>
            )

        if (this.state.number === 3)
            return (
                <g
                    transform={`translate(${props.translate})`}
                    onClick={this.onClick}
                >
                    <g
                        className={
                            props.rolled
                                ? props.side === "attack"
                                    ? "rolled-translate"
                                    : "rolled-translate-back"
                                : ""
                        }
                    >
                        <g className={props.rolled ? "rolled-rotate" : ""}>
                            <g
                                transform={`rotate(${props.rotate} 0 0) translate(-5 -5)`}
                            >
                                <path
                                    d="M2.282.83L7.254.828c.824 0 1.518.633 1.517 1.457L8.762 7.18c-.001.812-.623 1.478-1.434 1.494l-4.937.1A1.461 1.461 0 01.897 7.342l-.1-4.933C.781 1.584 1.46.831 2.282.831z"
                                    fill={fill}
                                />
                                <path
                                    d="M1.843.356L6.814.352c.824 0 1.519.633 1.517 1.457l-.008 4.898C8.32 7.517 7.7 8.184 6.888 8.2l-4.936.1A1.461 1.461 0 01.458 6.867l-.1-4.933C.34 1.11 1.019.356 1.843.356z"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={0.265}
                                />
                                <path d="M3.175 2.38a.876.876 0 01-.847.881c-.469.01-.797-.38-.807-.848-.01-.47.304-.841.773-.85.469-.01.872.347.881.816zM6.727 7.19a.876.876 0 01-1.05-.626c-.115-.455.19-.863.645-.977.455-.115.887.106 1.002.56.115.456-.142.928-.597 1.043zM3.695 4.226a.876.876 0 011.014-.684c.46.09.7.538.61.999-.09.46-.473.758-.934.669-.46-.09-.78-.524-.69-.984z" />
                            </g>
                        </g>
                    </g>
                </g>
            )

        if (this.state.number === 4)
            return (
                <g
                    transform={`translate(${props.translate})`}
                    onClick={this.onClick}
                >
                    <g
                        className={
                            props.rolled
                                ? props.side === "attack"
                                    ? "rolled-translate"
                                    : "rolled-translate-back"
                                : ""
                        }
                    >
                        <g className={props.rolled ? "rolled-rotate" : ""}>
                            <g
                                transform={`rotate(${props.rotate} 0 0) translate(-5 -5)`}
                            >
                                <path
                                    d="M2.282.83L7.254.828c.824 0 1.518.633 1.517 1.457L8.762 7.18c-.001.812-.623 1.478-1.434 1.494l-4.937.1A1.461 1.461 0 01.897 7.342l-.1-4.933C.781 1.584 1.46.831 2.282.831z"
                                    fill={fill}
                                />
                                <path
                                    d="M1.843.356L6.814.352c.824 0 1.519.633 1.517 1.457l-.008 4.898C8.32 7.517 7.7 8.184 6.888 8.2l-4.936.1A1.461 1.461 0 01.458 6.867l-.1-4.933C.34 1.11 1.019.356 1.843.356z"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={0.265}
                                />
                                <path d="M3.391 2.542a.876.876 0 01-.847.882c-.47.01-.797-.38-.807-.848-.01-.47.303-.841.773-.85.469-.01.871.347.881.816zM5.986 3.243a.876.876 0 01-.328-1.178c.23-.409.732-.493 1.141-.263.409.231.57.69.339 1.098-.231.409-.744.573-1.152.343zM5.71 6.44a.876.876 0 01.58-1.078c.449-.135.87.151 1.005.6.135.45-.067.892-.516 1.027-.45.136-.933-.1-1.069-.55zM2.555 7.074a.876.876 0 01-.749-.966c.06-.466.492-.734.957-.675.466.06.788.423.73.888-.06.466-.472.812-.938.753z" />
                            </g>
                        </g>
                    </g>
                </g>
            )

        if (this.state.number === 5)
            return (
                <g
                    transform={`translate(${props.translate})`}
                    onClick={this.onClick}
                >
                    <g
                        className={
                            props.rolled
                                ? props.side === "attack"
                                    ? "rolled-translate"
                                    : "rolled-translate-back"
                                : ""
                        }
                    >
                        <g className={props.rolled ? "rolled-rotate" : ""}>
                            <g
                                transform={`rotate(${props.rotate} 0 0) translate(-5 -5)`}
                            >
                                <path
                                    d="M2.282.83L7.254.828c.824 0 1.518.633 1.517 1.457L8.762 7.18c-.001.812-.623 1.478-1.434 1.494l-4.937.1A1.461 1.461 0 01.897 7.342l-.1-4.933C.781 1.584 1.46.831 2.282.831z"
                                    fill={fill}
                                />
                                <path
                                    d="M1.843.356L6.814.352c.824 0 1.519.633 1.517 1.457l-.008 4.898C8.32 7.517 7.7 8.184 6.888 8.2l-4.936.1A1.461 1.461 0 01.458 6.867l-.1-4.933C.34 1.11 1.019.356 1.843.356z"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={0.265}
                                />
                                <path d="M3.391 2.542a.876.876 0 01-.847.882c-.47.01-.797-.38-.807-.848-.01-.47.303-.841.773-.85.469-.01.871.347.881.816zM5.986 3.243a.876.876 0 01-.328-1.178c.23-.409.732-.493 1.141-.263.409.231.57.69.339 1.098-.231.409-.744.573-1.152.343zM5.71 6.44a.876.876 0 01.58-1.078c.449-.135.87.151 1.005.6.135.45-.067.892-.516 1.027-.45.136-.933-.1-1.069-.55zM2.555 7.074a.876.876 0 01-.749-.966c.06-.466.492-.734.957-.675.466.06.788.423.73.888-.06.466-.472.812-.938.753zM4.495 5.054a.876.876 0 01-.75-.965c.058-.466.49-.734.956-.676.465.059.788.422.73.887-.059.466-.47.813-.936.754z" />
                            </g>
                        </g>
                    </g>
                </g>
            )

        if (this.state.number === 6)
            return (
                <g
                    transform={`translate(${props.translate})`}
                    onClick={this.onClick}
                >
                    <g
                        className={
                            props.rolled
                                ? props.side === "attack"
                                    ? "rolled-translate"
                                    : "rolled-translate-back"
                                : ""
                        }
                    >
                        <g className={props.rolled ? "rolled-rotate" : ""}>
                            <g
                                transform={`rotate(${props.rotate} 0 0) translate(-5 -5)`}
                            >
                                <path
                                    d="M2.282.83L7.254.828c.824 0 1.518.633 1.517 1.457L8.762 7.18c-.001.812-.623 1.478-1.434 1.494l-4.937.1A1.461 1.461 0 01.897 7.342l-.1-4.933C.781 1.584 1.46.831 2.282.831z"
                                    fill={fill}
                                />
                                <path
                                    d="M1.843.356L6.814.352c.824 0 1.519.633 1.517 1.457l-.008 4.898C8.32 7.517 7.7 8.184 6.888 8.2l-4.936.1A1.461 1.461 0 01.458 6.867l-.1-4.933C.34 1.11 1.019.356 1.843.356z"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={0.265}
                                />
                                <path d="M3.242 2.287a.876.876 0 01-.847.882c-.469.01-.797-.379-.807-.848-.01-.47.304-.841.773-.85.469-.01.872.347.881.816zM5.964 3.03a.876.876 0 01-.327-1.178c.23-.408.732-.493 1.14-.262.41.23.57.69.34 1.098-.231.408-.744.573-1.153.342zM5.795 6.8a.876.876 0 01.58-1.077c.449-.135.87.151 1.005.6.135.45-.067.892-.516 1.028-.45.135-.933-.101-1.069-.55zM2.428 7.393a.876.876 0 01-.75-.967c.06-.465.492-.733.958-.674.465.059.788.422.729.888-.06.466-.471.812-.937.753zM2.413 5.182a.876.876 0 01-.75-.966c.058-.465.49-.734.956-.675.466.058.788.421.73.887-.059.466-.47.812-.936.754zM6.244 5.079a.876.876 0 01-.648-1.038c.106-.457.564-.68 1.02-.574.458.106.742.5.636.957-.106.458-.551.76-1.008.655z" />
                            </g>
                        </g>
                    </g>
                </g>
            )

        return ""
    }
}
