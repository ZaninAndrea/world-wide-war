import React from "react"

export default class TanksDot extends React.Component {
    render() {
        const { owner, tanks, color } = this.props.countryData

        if (owner === null) return ""

        let scale = 0.7 + Math.min(tanks / 30, 0.5)
        const textFill = ["#f6d32d"].indexOf(color) !== -1 ? "black" : "white"

        return (
            <>
                <circle
                    cx={305.915}
                    cy={160.427}
                    r={7.875 * scale}
                    fill={color}
                    fillRule="evenodd"
                    stroke="black"
                    strokeWidth="1"
                />
                <text
                    xmlSpace="preserve"
                    style={{
                        lineHeight: 1.25,
                        InkscapeFontSpecification: "'Quicksand Bold'",
                    }}
                    x={305.842}
                    y={163.875}
                    transform="scale(.99997 1.00003)"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight={700}
                    fontStretch="normal"
                    fontSize={9.865 * scale}
                    fontFamily="Quicksand"
                    letterSpacing={0}
                    wordSpacing={0}
                    fill={textFill}
                >
                    <tspan
                        x={305.842}
                        y={163.875 - (8.5 * (1 - scale)) / 2}
                        style={{
                            textAlign: "center",
                        }}
                        textAnchor="middle"
                        fill={textFill}
                        strokeWidth={1}
                    >
                        {tanks}
                    </tspan>
                </text>
            </>
        )
    }
}
