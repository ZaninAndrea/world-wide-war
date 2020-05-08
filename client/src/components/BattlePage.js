import React from "react"
import Dice from "./Dice"

const attackDicePositions = [
    { translate: "55 53", rotate: "5" },
    { translate: "53 73", rotate: "-5" },
    { translate: "56 93", rotate: "10" },
]
const defenseDicePositions = [
    { translate: "140 53", rotate: "-10" },
    { translate: "141 73", rotate: "6" },
    { translate: "139 93", rotate: "5" },
]
export default function BattlePage(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="battle-page"
            viewBox="0 0 198.39 137.337"
            width="749.819"
            height="519.068"
            style={{
                right: `${110 * (props.page - 1)}vw`,
                transform: `rotate(${-20 * (props.page - 1)}deg)`,
                top: `${Math.abs(20 * (props.page - 1))}vh`,
            }}
        >
            <g id="layer2" style={{ display: "inline" }}>
                {props.attackDices.map(({ n, rolled, active, lost }, i) => (
                    <Dice
                        key={"attack-" + i}
                        number={n}
                        translate={attackDicePositions[i].translate}
                        rotate={attackDicePositions[i].rotate}
                        side="attack"
                        rolled={rolled}
                        active={active}
                        lost={lost}
                        updateDice={(newN) => props.updateAttackDice(i, newN)}
                    />
                ))}
                {props.defenseDices.map(({ n, rolled, active, lost }, i) => (
                    <Dice
                        key={"defense-" + i}
                        number={n}
                        translate={defenseDicePositions[i].translate}
                        rotate={defenseDicePositions[i].rotate}
                        side="defense"
                        rolled={rolled}
                        active={active}
                        lost={lost}
                        updateDice={(newN) => props.updateDefenseDice(i, newN)}
                    />
                ))}
                <path
                    id="path869"
                    style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: "0.264583px",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeOpacity: 1,
                    }}
                    d="m 63.3242 46.6299 l 1.8024 54.7928"
                />

                <path
                    id="path902"
                    style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeWidth: "0.264583px",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeOpacity: 1,
                    }}
                    d="m 131.23 46.6299 l -0.61288 58.5313"
                />
                <g id="g918" transform="translate(-1.08144 -3.48463)">
                    <path
                        id="path904"
                        style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeWidth: "1.76253",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: "4",
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                        }}
                        d="m 90.6858 30.2293 l 2.61501 7.30897 l 2.82804 -6.50853"
                    />
                    <path
                        id="path906"
                        style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeWidth: "1.76253",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: "4",
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                        }}
                        d="m 101.98 33.4887 c 0 0 -3.42819 -0.713049 -4.30868 0.607691 c -0.880493 1.32074 0.538045 2.18985 1.81877 2.34994 c 1.28072 0.16009 1.39308 4.67659 -4.27401 1.73789"
                    />
                </g>
            </g>
            <g
                transform="scale(0.35 0.35) rotate(180) translate(-500 -20)"
                id="g1371"
                fillOpacity={1}
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={props.goBack}
            >
                <circle
                    id="circle1363"
                    cx={1}
                    cy={1}
                    r={14.174}
                    fill={
                        props.backActive
                            ? props.getPlayer(props.playerNumber).color
                            : "#fff"
                    }
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
                    d="M-9 0l15.556-.265"
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
            <foreignObject x={0} y={20} width="88px" height="25px">
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <p
                        style={{
                            margin: "0",
                            padding: "0",
                            textAlign: "center",
                            fontFamily: "'Arial Heavy'",
                            fontWeight: "900",
                            fontSize: "9px",
                            color: props.attackColor,
                        }}
                    >
                        {props.attackFromText || ""}
                    </p>
                </div>
            </foreignObject>
            <foreignObject x={100} y={20} width="88px" height="25px">
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <p
                        style={{
                            margin: "0",
                            padding: "0",
                            textAlign: "center",
                            fontFamily: "'Arial Heavy'",
                            fontWeight: "900",
                            fontSize: "9px",
                            color: props.defenseColor,
                        }}
                    >
                        {props.attackToText || ""}
                    </p>
                </div>
            </foreignObject>
        </svg>
    )
}
