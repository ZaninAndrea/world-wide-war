import React from "react"
import TanksDot from "./TanksDot"

export default function UI(props) {
    return (
        <>
            <g id="layer5" strokeWidth={1}>
                <g id="g1350">
                    <path
                        d="M20.506 396.31l1.463 100.997 125.881-1.951-1.22-100.51z"
                        id="path1310"
                        fill="white"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.286 411.435l129.784-1.708"
                        id="path1312"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.53 428.024l128.564-2.927"
                        id="path1314"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.774 446.077l129.052-2.684"
                        id="path1316"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20.018 460.714l129.54-2.196"
                        id="path1318"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.53 478.523l131.248-2.44"
                        id="path1320"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M119.796 393.87l2.927 102.218"
                        id="path2280"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <text
                        xmlSpace="preserve"
                        style={{
                            lineHeight: 1.25,
                            InkscapeFontSpecification: "'Quicksand Medium'",
                        }}
                        x={22.953}
                        y={394.069}
                        id="text2571"
                        transform="rotate(-1.276)"
                        fontStyle="normal"
                        fontVariant="normal"
                        fontWeight={500}
                        fontStretch="normal"
                        fontSize={5}
                        fontFamily="Quicksand"
                        letterSpacing={0}
                        wordSpacing={0}
                        fill="#000"
                        fillOpacity={1}
                        stroke="none"
                    >
                        <tspan
                            id="tspan2569"
                            x={22.953}
                            y={394.069}
                            style={{
                                InkscapeFontSpecification: "'Quicksand Medium'",
                                textAlign: "center",
                            }}
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight={500}
                            fontStretch="normal"
                            fontFamily="Quicksand"
                            textAnchor="middle"
                            fill="#000"
                            strokeWidth={1}
                        >
                            {"NOME"}
                        </tspan>
                    </text>
                    <text
                        transform="rotate(-1.276)"
                        id="text2593"
                        y={395.454}
                        x={124.782}
                        style={{
                            lineHeight: 1.25,
                            InkscapeFontSpecification: "'Quicksand Medium'",
                        }}
                        xmlSpace="preserve"
                        fontStyle="normal"
                        fontVariant="normal"
                        fontWeight={500}
                        fontStretch="normal"
                        fontSize={5}
                        fontFamily="Quicksand"
                        letterSpacing={0}
                        wordSpacing={0}
                        fill="#000"
                        fillOpacity={1}
                        stroke="none"
                    >
                        <tspan
                            style={{
                                InkscapeFontSpecification: "'Quicksand Medium'",
                                textAlign: "center",
                            }}
                            y={395.454}
                            x={124.782}
                            id="tspan2591"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight={500}
                            fontStretch="normal"
                            fontFamily="Quicksand"
                            textAnchor="middle"
                            fill="#000"
                            strokeWidth={1}
                        >
                            {"N. CARTE"}
                        </tspan>
                    </text>
                </g>
                {props.showMyCards && (
                    <g
                        id="g1337"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={props.cardsPageButtonClick}
                    >
                        <circle
                            r={14.174}
                            cy={364.324}
                            cx={36.871}
                            id="circle1331"
                            fill="#d5d5d3"
                            fillOpacity={1}
                            stroke="none"
                        />
                        <circle
                            id="path1322"
                            cx={35.373}
                            cy={363.436}
                            r={14.174}
                            fill="none"
                            fillOpacity={1}
                            stroke="#000"
                        />
                        <path
                            id="path1324"
                            d="M37.9 356.856l-.072-2.483-8.705.668.446 15.848 3.278-.335"
                            fill="none"
                            stroke="#000"
                        />
                        <path
                            id="path1326"
                            d="M32.471 357.274l.447 15.846 8.704-.892-.446-15.624z"
                            fill="none"
                            stroke="#000"
                        />
                    </g>
                )}
                {props.showOk && (
                    <g
                        transform="translate(716 479)"
                        onClick={() => props.okActive && props.onOkClick()}
                    >
                        <path
                            d="M16.07 1.389a14.174 14.174 0 00-5.213 1.033 14.174 14.174 0 00-8.722 11.174 14.174 14.174 0 005.316 13.14 14.174 14.174 0 0014.037 1.967A14.174 14.174 0 0030.21 17.53a14.174 14.174 0 00-5.314-13.14 14.174 14.174 0 00-8.825-3z"
                            fill={
                                props.okActive
                                    ? props.getPlayer(props.playerNumber).color
                                    : "#deddda"
                            }
                            fillRule="evenodd"
                        />
                        <circle
                            r={14.174}
                            cy={14.674}
                            cx={14.674}
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.696 14.653c1.906 2.754 3.204 5.888 4.228 9.191C20.296 10.191 25.807 4.84 28.654 2.966"
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                )}
                {props.showGetCard && (
                    <g
                        id="g1361"
                        fill="none"
                        fillOpacity={1}
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={4}
                        strokeDashoffset={0}
                        onClick={props.onGetCard}
                    >
                        <rect
                            id="rect1352"
                            width={54.648}
                            height={81.972}
                            x={233.076}
                            y={423.202}
                            transform="rotate(-6.12)"
                            ry={9.632}
                            strokeDasharray="8,8"
                            fill="white"
                        />
                        <path
                            d="M306.884 425.502l2.298 15.556"
                            id="path1354"
                            strokeDasharray="none"
                        />
                        <path
                            id="path1356"
                            d="M315.812 432.13l-15.557 2.299"
                            strokeDasharray="none"
                        />
                    </g>
                )}
                {props.showNext && (
                    <g
                        transform="translate(695 130)"
                        id="g1371"
                        fillOpacity={1}
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle
                            id="circle1363"
                            cx={36.871}
                            cy={364.324}
                            r={14.174}
                            fill={
                                props.nextActive
                                    ? props.getPlayer(props.playerNumber).color
                                    : "#deddda"
                            }
                            onClick={() =>
                                props.nextActive && props.onNextClick()
                            }
                        />
                        <circle
                            r={14.174}
                            cy={363.436}
                            cx={35.373}
                            id="circle1365"
                            fill="none"
                            stroke="#000"
                        />
                        <path
                            id="path1373"
                            d="M26.61 363.615l15.556-.265"
                            fill="none"
                            stroke="#000"
                            strokeMiterlimit={4}
                            strokeDasharray="none"
                            strokeDashoffset={0}
                        />
                        <path
                            id="path1375"
                            d="M38.453 359.02l3.978 4.33-4.42 3.978"
                            fill="none"
                            stroke="#000"
                            strokeMiterlimit={4}
                            strokeDasharray="none"
                            strokeDashoffset={0}
                        />
                    </g>
                )}
                {props.showPlay && (
                    <g
                        transform="translate(695 130)"
                        id="g1371"
                        fillOpacity={1}
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle
                            id="circle1363"
                            cx={36.871}
                            cy={364.324}
                            r={14.174}
                            fill={
                                props.playActive
                                    ? props.getPlayer(props.playerNumber).color
                                    : "#deddda"
                            }
                            onClick={() =>
                                props.playActive && props.onPlayClick()
                            }
                            stroke="none"
                        />
                        <circle
                            r={14.174}
                            cy={363.436}
                            cx={35.373}
                            id="circle1365"
                            fill="none"
                            stroke="#000"
                        />
                        <path
                            id="path1373"
                            d="M26.61 363.615l15.556-.265"
                            fill="none"
                            stroke="#000"
                            strokeMiterlimit={4}
                            strokeDasharray="none"
                            strokeDashoffset={0}
                        />
                        <path
                            id="path1375"
                            d="M38.453 359.02l3.978 4.33-4.42 3.978"
                            fill="none"
                            stroke="#000"
                            strokeMiterlimit={4}
                            strokeDasharray="none"
                            strokeDashoffset={0}
                        />
                    </g>
                )}
            </g>
            <g
                id="dots"
                fillOpacity={1}
                stroke="none"
                strokeWidth={1}
                onClick={props.circleClick}
            >
                <g transform="translate(0 0)" id="g1595">
                    <TanksDot countryData={props.map.great_britain} />
                </g>
                <g transform="translate(28.461 47.376)" id="g1603">
                    <TanksDot countryData={props.map.western_europe} />
                </g>
                <g id="g1611" transform="translate(88.107 61.31)">
                    <TanksDot countryData={props.map.southern_europe} />
                </g>
                <g transform="translate(97.96 132.073)" id="g1779-93">
                    <TanksDot countryData={props.map.egypt} />
                </g>
                <g transform="translate(42.71 148.823)" id="g1779-9">
                    <TanksDot countryData={props.map.north_africa} />
                </g>
                <g transform="translate(139.695 189.195)" id="g1779-4">
                    <TanksDot countryData={props.map.east_africa} />
                </g>
                <g transform="translate(70.357 15.81)" id="g1619">
                    <TanksDot countryData={props.map.northern_europe} />
                </g>
                <g id="g1627" transform="translate(141.857 -19.94)">
                    <TanksDot countryData={props.map.ukraine} />
                </g>
                <g transform="translate(69.909 -57.416)" id="g1635">
                    <TanksDot countryData={props.map.scandinavia} />
                </g>
                <g id="g1643" transform="translate(13.694 -55.648)">
                    <TanksDot countryData={props.map.iceland} />
                </g>
                <g transform="translate(198.107 34.56)" id="g1651">
                    <TanksDot countryData={props.map.afghanistan} />
                </g>
                <g id="g1659" transform="translate(212.607 -31.44)">
                    <TanksDot countryData={props.map.ural} />
                </g>
                <g transform="translate(249.023 -61.845)" id="g1667">
                    <TanksDot countryData={props.map.siberia} />
                </g>
                <g id="g1675" transform="translate(299.648 -86.345)">
                    <TanksDot countryData={props.map.yakursk} />
                </g>
                <g transform="translate(290.632 -25.18)" id="g1683">
                    <TanksDot countryData={props.map.irkutsk} />
                </g>
                <g id="g1691" transform="translate(303.183 18.837)">
                    <TanksDot countryData={props.map.mongolia} />
                </g>
                <g transform="translate(379.02 16.186)" id="g1699">
                    <TanksDot countryData={props.map.japan} />
                </g>
                <g transform="translate(282.5 63.562)" id="g1707">
                    <TanksDot countryData={props.map.china} />
                </g>
                <g id="g1715" transform="translate(240.372 106.435)">
                    <TanksDot countryData={props.map.india} />
                </g>
                <g transform="translate(299.239 125.88)" id="g1723">
                    <TanksDot countryData={props.map.siam} />
                </g>
                <g transform="translate(156.445 113.791)" id="g1731">
                    <TanksDot countryData={props.map.middle_east} />
                </g>
                <g id="g1739" transform="translate(324.518 206.313)">
                    <TanksDot countryData={props.map.indonesia} />
                </g>
                <g transform="translate(373.308 187.398)" id="g1747">
                    <TanksDot countryData={props.map.new_guinea} />
                </g>
                <g id="g1755" transform="translate(341.665 263.59)">
                    <TanksDot countryData={props.map.western_australia} />
                </g>
                <g id="g1763" transform="translate(374.546 247.891)">
                    <TanksDot countryData={props.map.eastern_australia} />
                </g>
                <g transform="translate(170.665 275.84)" id="g1771">
                    <TanksDot countryData={props.map.madagascar} />
                </g>
                <g id="g1779" transform="translate(104.165 280.59)">
                    <TanksDot countryData={props.map.south_africa} />
                </g>
                <g transform="translate(99.71 213.948)" id="g1779-0">
                    <TanksDot countryData={props.map.congo} />
                </g>
                <g transform="translate(-44.462 -100.5)" id="g1779-8">
                    <TanksDot countryData={props.map.greenland} />
                </g>
                <g transform="translate(-196.54 -79.052)" id="g1779-42">
                    <TanksDot countryData={props.map.northwest_territory} />
                </g>
                <g transform="translate(-246.783 -77.166)" id="g1779-1">
                    <TanksDot countryData={props.map.alaska} />
                </g>
                <g transform="translate(-185.707 -34.032)" id="g1779-6">
                    <TanksDot countryData={props.map.alberta} />
                </g>
                <g transform="translate(-140.383 -25.618)" id="g1779-7">
                    <TanksDot countryData={props.map.ontario} />
                </g>
                <g transform="translate(-86.915 -27.802)" id="g1779-70">
                    <TanksDot countryData={props.map.quebec} />
                </g>
                <g transform="translate(-184.04 19.698)" id="g1779-60">
                    <TanksDot countryData={props.map.western_united_states} />
                </g>
                <g transform="translate(-129.54 36.698)" id="g1779-11">
                    <TanksDot countryData={props.map.eastern_united_states} />
                </g>
                <g transform="translate(-174.54 83.323)" id="g1779-65">
                    <TanksDot countryData={props.map.central_america} />
                </g>
                <g transform="translate(-126.398 124.979)" id="g1779-04">
                    <TanksDot countryData={props.map.venezuela} />
                </g>
                <g transform="translate(-68.165 173.448)" id="g1779-98">
                    <TanksDot countryData={props.map.brazil} />
                </g>
                <g transform="translate(-111.284 192.419)" id="g1779-2">
                    <TanksDot countryData={props.map.peru} />
                </g>
                <g transform="translate(-110.93 247.75)" id="g1779-62">
                    <TanksDot countryData={props.map.argentina} />
                </g>
                <g transform="translate(357.46 -74.927)" id="g1779-45">
                    <TanksDot countryData={props.map.kamchatka} />
                </g>
            </g>
            {props.playerNumber !== null && (
                <>
                    <foreignObject
                        className="node"
                        x="28px"
                        y={`${398 + 17 * props.playerNumber}px`}
                        width="85px"
                        height="13px"
                        transform="rotate(-1,0,0)"
                    >
                        <input
                            className="player-name-input"
                            value={props.name}
                            onChange={props.onNameChange}
                            placeholder="Your name"
                            key="player-name-input"
                            ref={(el) => {
                                if (el !== null) {
                                    let oldValue = el.value
                                    el.focus()
                                    el.value = "A"
                                    el.value = oldValue
                                }
                            }}
                        />
                    </foreignObject>

                    <text
                        x="80px"
                        y="407px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fontFamily="Quicksand"
                    >
                        <tspan
                            textAnchor="middle"
                            x="126px"
                            y={`${
                                407 +
                                17 * props.playerNumber +
                                [1, 1, 1, 0, -1, 0][props.playerNumber]
                            }px`}
                            strokeWidth={1}
                        >
                            {props.getPlayer(props.playerNumber).cardsCount}
                        </tspan>
                    </text>

                    <circle
                        id="circle1363"
                        cx={30}
                        cy={404 + 17 * props.playerNumber}
                        r={5}
                        fill={props.getPlayer(props.playerNumber).color}
                        stroke="none"
                        onClick={props.onColorChange}
                        // onTouchStart={props.onColorChange}
                    />
                    <circle
                        r={5}
                        cy={403 + 17 * props.playerNumber}
                        cx={29}
                        id="circle1365"
                        fill="none"
                        stroke="#000"
                    />
                </>
            )}
            {props.playerNumber !== 0 && props.getPlayer(0) && (
                <>
                    <text
                        x="30px"
                        y="407px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(0).disconnected ? "#bbb" : "#000"}
                        fontFamily="Quicksand"
                        onClick={props.reconnectToPlayer(0)}
                    >
                        <tspan x="30px" y="407px" strokeWidth={1}>
                            {props.getPlayer(0).name}
                        </tspan>
                    </text>

                    <text
                        x="80px"
                        y="407px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fontFamily="Quicksand"
                        fill={props.getPlayer(0).disconnected ? "#bbb" : "#000"}
                    >
                        <tspan
                            textAnchor="middle"
                            x="126px"
                            y="408px"
                            strokeWidth={1}
                        >
                            {props.getPlayer(0).cardsCount}
                        </tspan>
                    </text>

                    <circle
                        id="circle1363"
                        cx={30}
                        cy={404}
                        r={5}
                        fill={props.getPlayer(0).color}
                        onClick={props.reconnectToPlayer(0)}
                        stroke="none"
                    />
                    <circle
                        r={5}
                        cy={403}
                        cx={29}
                        id="circle1365"
                        fill="none"
                        stroke="#000"
                    />
                </>
            )}
            {props.playerNumber !== 1 && props.getPlayer(1) && (
                <>
                    <text
                        x="30px"
                        y="424px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(1).disconnected ? "#bbb" : "#000"}
                        onClick={props.reconnectToPlayer(1)}
                        fontFamily="Quicksand"
                    >
                        <tspan x="30px" y="424px" strokeWidth={1}>
                            {props.getPlayer(1).name}
                        </tspan>
                    </text>

                    <text
                        x="80px"
                        y="407px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(1).disconnected ? "#bbb" : "#000"}
                        fontFamily="Quicksand"
                    >
                        <tspan
                            textAnchor="middle"
                            x="126px"
                            y="425px"
                            strokeWidth={1}
                        >
                            {props.getPlayer(1).cardsCount}
                        </tspan>
                    </text>

                    <circle
                        id="circle1363"
                        cx={30}
                        cy={421}
                        r={5}
                        fill={props.getPlayer(1).color}
                        onClick={props.reconnectToPlayer(1)}
                        stroke="none"
                    />
                    <circle
                        r={5}
                        cy={420}
                        cx={29}
                        id="circle1365"
                        fill="none"
                        stroke="#000"
                    />
                </>
            )}
            {props.playerNumber !== 2 && props.getPlayer(2) && (
                <>
                    <text
                        x="30px"
                        y="441px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(2).disconnected ? "#bbb" : "#000"}
                        onClick={props.reconnectToPlayer(2)}
                        fontFamily="Quicksand"
                    >
                        <tspan x="30px" y="441px" strokeWidth={1}>
                            {props.getPlayer(2).name}
                        </tspan>
                    </text>

                    <text
                        x="80px"
                        y="407px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(2).disconnected ? "#bbb" : "#000"}
                        fontFamily="Quicksand"
                    >
                        <tspan
                            textAnchor="middle"
                            x="126px"
                            y="442px"
                            strokeWidth={1}
                        >
                            {props.getPlayer(2).cardsCount}
                        </tspan>
                    </text>

                    <circle
                        id="circle1363"
                        cx={30}
                        cy={438}
                        r={5}
                        fill={props.getPlayer(2).color}
                        onClick={props.reconnectToPlayer(2)}
                        stroke="none"
                    />
                    <circle
                        r={5}
                        cy={437}
                        cx={29}
                        id="circle1365"
                        fill="none"
                        stroke="#000"
                    />
                </>
            )}
            {props.playerNumber !== 3 && props.getPlayer(3) && (
                <>
                    <text
                        x="30px"
                        y="458px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(3).disconnected ? "#bbb" : "#000"}
                        onClick={props.reconnectToPlayer(3)}
                        fontFamily="Quicksand"
                    >
                        <tspan x="30px" y="458px" strokeWidth={1}>
                            {props.getPlayer(3).name}
                        </tspan>
                    </text>

                    <text
                        x="80px"
                        y="407px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(3).disconnected ? "#bbb" : "#000"}
                        fontFamily="Quicksand"
                    >
                        <tspan
                            textAnchor="middle"
                            x="126px"
                            y="458px"
                            strokeWidth={1}
                        >
                            {props.getPlayer(0).cardsCount}
                        </tspan>
                    </text>

                    <circle
                        id="circle1363"
                        cx={30}
                        cy={455}
                        r={5}
                        fill={props.getPlayer(3).color}
                        onClick={props.reconnectToPlayer(3)}
                        stroke="none"
                    />
                    <circle
                        r={5}
                        cy={454}
                        cx={29}
                        id="circle1365"
                        fill="none"
                        stroke="#000"
                    />
                </>
            )}
            {props.playerNumber !== 4 && props.getPlayer(4) && (
                <>
                    <text
                        x="30px"
                        y="475px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(4).disconnected ? "#bbb" : "#000"}
                        onClick={props.reconnectToPlayer(4)}
                        fontFamily="Quicksand"
                    >
                        <tspan x="30px" y="475px" strokeWidth={1}>
                            {props.getPlayer(4).name}
                        </tspan>
                    </text>

                    <text
                        x="80px"
                        y="407px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(4).disconnected ? "#bbb" : "#000"}
                        fontFamily="Quicksand"
                    >
                        <tspan
                            textAnchor="middle"
                            x="126px"
                            y="474px"
                            strokeWidth={1}
                        >
                            {props.getPlayer(0).cardsCount}
                        </tspan>
                    </text>

                    <circle
                        id="circle1363"
                        cx={30}
                        cy={472}
                        r={5}
                        fill={props.getPlayer(4).color}
                        onClick={props.reconnectToPlayer(4)}
                        stroke="none"
                    />
                    <circle
                        r={5}
                        cy={471}
                        cx={29}
                        id="circle1365"
                        fill="none"
                        stroke="#000"
                    />
                </>
            )}
            {props.playerNumber !== 5 && props.getPlayer(5) && (
                <>
                    <text
                        x="30px"
                        y="492px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(5).disconnected ? "#bbb" : "#000"}
                        onClick={props.reconnectToPlayer(5)}
                        fontFamily="Quicksand"
                    >
                        <tspan x="30px" y="492px" strokeWidth={1}>
                            {props.getPlayer(5).name}
                        </tspan>
                    </text>

                    <text
                        x="80px"
                        y="407px"
                        transform="rotate(-1,0,0)"
                        fontWeight={700}
                        fontSize={10}
                        fill={props.getPlayer(5).disconnected ? "#bbb" : "#000"}
                        fontFamily="Quicksand"
                    >
                        <tspan
                            textAnchor="middle"
                            x="126px"
                            y="492px"
                            strokeWidth={1}
                        >
                            {props.getPlayer(5).cardsCount}
                        </tspan>
                    </text>

                    <circle
                        id="circle1363"
                        cx={30}
                        cy={489}
                        r={5}
                        fill={props.getPlayer(5).color}
                        onClick={props.reconnectToPlayer(5)}
                        stroke="none"
                    />
                    <circle
                        r={5}
                        cy={488}
                        cx={29}
                        id="circle1365"
                        fill="none"
                        stroke="#000"
                    />
                </>
            )}
            {props.tanks !== null && (
                <g id="tanks" transform="translate(550 485)">
                    <text
                        x="-8"
                        y="12"
                        fontWeight={700}
                        fontSize={13}
                        fontFamily="Quicksand"
                    >
                        <tspan textAnchor="end" strokeWidth={1}>
                            {props.tanks}
                        </tspan>
                    </text>
                    <g
                        transform="matrix(1 0 0 .99997 -35.64 -166.53)"
                        fill={props.getPlayer(props.playerNumber).color}
                    >
                        <rect
                            width={27.295}
                            height={6.883}
                            x={37.198}
                            y={175.002}
                            ry={3.442}
                            rx={3.441}
                        />
                        <path d="M39.314 176.043v-6.705c0-.69.548-1.245 1.228-1.245h8.044c.68 0 1.228.555 1.228 1.245v6.705" />
                        <path d="M48.819 169.429h7.206v6.385l-6.72.266z" />
                        <path d="M54.485 170.507h13.55v1.725H54.273" />
                    </g>
                    <rect
                        width={27.295}
                        height={6.883}
                        x={0.5}
                        y={7.409}
                        ry={3.441}
                        rx={3.441}
                        fill="none"
                        stroke="#000"
                    />
                    <circle
                        cx={4.168}
                        cy={10.925}
                        fill="none"
                        stroke="#000"
                        r={1.676}
                    />
                    <circle
                        cy={10.925}
                        cx={24.006}
                        fill="none"
                        stroke="#000"
                        r={1.676}
                    />
                    <path
                        d="M2.616 7.391V1.746c0-.69.548-1.246 1.228-1.246h8.044c.68 0 1.228.556 1.228 1.246V7.39M13.188 1.836h6.14v5.446"
                        fill="none"
                        stroke="#000"
                    />
                    <path
                        d="M19.375 2.914h11.962V4.64H19.161"
                        fill="none"
                        stroke="#000"
                    />
                </g>
            )}
        </>
    )
}
