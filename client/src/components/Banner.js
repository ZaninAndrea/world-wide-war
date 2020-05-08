import React from "react"

export default class Banner extends React.Component {
    render() {
        return (
            <g className="banner">
                <defs xmlns="http://www.w3.org/2000/svg">
                    <pattern
                        id="pattern319"
                        patternTransform="translate(247.5,217.62283)"
                        height="14.50431"
                        width="30.000002"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            style={{
                                fill: "none",
                                stroke: "#99c1f1",
                                strokeWidth: "1px",
                                strokeLinecap: "butt",
                                strokeLinejoin: "miter",
                                strokeOpacity: "1",
                            }}
                            d="M 0,7.2521467 H 30"
                            id="path315"
                        />
                        <rect
                            style={{
                                fill: "none",
                                stroke: "none",
                                strokeWidth: "1px",
                            }}
                            id="rect317"
                            width="30.000002"
                            height="14.50431"
                            x="0"
                            y="0"
                        />
                    </pattern>
                </defs>
                <path
                    d="M566.327 200.808l-334.46 8.131 1.767 78.844 339.057-5.658z"
                    fill="#fff"
                />
                <path
                    d="M566.327 200.808l-334.46 8.131 1.767 78.844 339.057-5.658z"
                    fill="url(#pattern319)"
                />
                <path
                    d="M562.327 194.808l-334.46 8.131 1.767 78.844 339.057-5.658zm-320.496 17.324a4.773 4.773 0 014.772 4.774 4.773 4.773 0 01-4.772 4.771 4.773 4.773 0 01-4.773-4.771 4.773 4.773 0 014.773-4.774zm1.06 26.162a4.773 4.773 0 014.772 4.774 4.773 4.773 0 01-4.771 4.773 4.773 4.773 0 01-4.774-4.773 4.773 4.773 0 014.774-4.774zm.886 25.28a4.773 4.773 0 014.771 4.773 4.773 4.773 0 01-4.771 4.774 4.773 4.773 0 01-4.774-4.774 4.773 4.773 0 014.774-4.773z"
                    fill="none"
                    stroke="#000"
                />
                <path
                    d="M529.27 191.325l3.084.24-1.365-2.53 4.563 1.827-2.844-4.115 3.441 1.08-1.723-3.37 4.172 1.82-2.453-4.108 43.248 31.707-3.302-.352 1.584 2.641-3.84-.755 2.121 3.044-4.807-1.887 3.088 4.176-3.587-.904 2.236 4.009zM215.669 261.682l3.084.24-1.366-2.53 4.563 1.828-2.844-4.116 3.441 1.08-1.723-3.37 4.172 1.82-2.453-4.108 43.248 31.707-3.302-.352 1.584 2.641-3.84-.755 2.121 3.044-4.807-1.887 3.088 4.176-3.587-.903 2.236 4.008z"
                    fill="#cbe2fe"
                    stroke="#000"
                />
                <text
                    style={{
                        lineHeight: 1.25,
                    }}
                    x={429.487}
                    y={262.786}
                    transform="matrix(1.00254 -.01817 -.13046 .99983 0 0)"
                    fontWeight={400}
                    fontSize={30}
                    fontFamily="sans-serif"
                >
                    <tspan
                        x={429.487}
                        y={262.786}
                        style={{
                            textAlign: "center",
                        }}
                        fontWeight={900}
                        fontFamily="Arial"
                        textAnchor="middle"
                    >
                        {this.props.text}
                    </tspan>
                </text>
            </g>
        )
    }
}
