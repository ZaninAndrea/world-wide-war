import React from "react"

export default class CardObiettivo extends React.Component {
    render() {
        return (
            <g onDoubleClick={this.props.showObjective}>
                <path
                    d="M59.066 364.574h66.77c9.401 0 16.97 7.57 16.97 16.97v100.34c0 9.402-7.569 16.971-16.97 16.971h-65.27c-9.402 0-16.83-7.57-16.97-16.97l-1.5-100.34c-.141-9.4 7.568-16.97 16.97-16.97z"
                    fill="#57e389"
                />
                <path
                    d="M55.566 361.074h66.77c9.401 0 16.97 7.57 16.97 16.97v100.34c0 9.402-7.569 16.971-16.97 16.971h-65.27c-9.402 0-16.83-7.57-16.97-16.97l-1.5-100.34c-.141-9.4 7.568-16.97 16.97-16.97z"
                    fill="none"
                    stroke="#000"
                />
                {/* <text
                    y={424.366}
                    x={90.956}
                    style={{
                        lineHeight: 1.25,
                    }}
                    fontWeight={400}
                    fontSize={14.482}
                    fontFamily="sans-serif"
                >
                    <tspan
                        style={{
                            textAlign: "center",
                        }}
                        y={424.366}
                        x={90.956}
                        fontWeight={900}
                        fontFamily="Arial"
                        textAnchor="middle"
                    >
                        {"FAI TUA"}
                    </tspan>
                    <tspan
                        style={{
                            textAlign: "center",
                        }}
                        y={442.697}
                        x={90.956}
                        fontWeight={900}
                        fontFamily="Arial"
                        textAnchor="middle"
                    >
                        {"L'AMERICA"}
                    </tspan>
                </text> */}

                <foreignObject x={48} y={365} width="84px" height="120px">
                    <div
                        style={{
                            width: "84px",
                            height: "120px",
                            display: "flex",
                        }}
                    >
                        <p
                            style={{
                                margin: "auto",
                                padding: "0",
                                textAlign: "center",
                                fontFamily: "'Arial Heavy'",
                                fontSize: "10px",
                            }}
                        >
                            {this.props.text}
                        </p>
                    </div>
                </foreignObject>
            </g>
        )
    }
}
