const { getCards, continents, getCountries, objectives } = require("./mapData")

function shuffle(arr) {
    let a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

function initializeGame() {
    return {
        players: [],
        deck: getCards(),
        started: false,
        map: getCountries(),
        phase: "LOBBY",
        turn: null,
        wonAttack: false,
        attackDices: [
            { n: 1, rolled: false },
            { n: 2, rolled: false },
            { n: 3, rolled: false },
        ],
        defenseDices: [
            { n: 1, rolled: false },
            { n: 2, rolled: false },
            { n: 3, rolled: false },
        ],
        objectives: shuffle(objectives),
    }
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

function getCardsValue(cards) {
    let types = cards
        .map((card) => card.type)
        .sort()
        .join("-")

    let typeToValue = {
        "cannone-cannone-cannone": 4,
        "fante-fante-fante": 6,
        "cavallo-cavallo-cavallo": 8,
        "cannone-cavallo-fante": 10,
        "cannone-cannone-jolly": 12,
        "fante-fante-jolly": 12,
        "cavallo-cavallo-jolly": 12,
    }

    return typeToValue[types] || -1
}

const italianNames = {
    alaska: "ALASKA",
    northwest_territory: "TERRITORI DEL NORD OVEST",
    greenland: "GROENLANDIA",
    quebec: "QUEBEC",
    ontario: "ONTARIO",
    alberta: "ALBERTA",
    western_united_states: "STATI UNITI OCCIDENTALI",
    eastern_united_states: "STATI UNITI ORIENTALI",
    central_america: "AMERICA CENTRALE",
    venezuela: "VENEZUELA",
    brazil: "BRASILE",
    peru: "PERÙ",
    argentina: "ARGENTINA",
    north_africa: "AFRICA DEL NORD",
    egypt: "EGITTO",
    east_africa: "AFRICA ORIENTALE",
    congo: "CONGO",
    south_africa: "AFRICA DEL SUD",
    madagascar: "MADAGASCAR",
    western_europe: "EUROPA OCCIDENTALE",
    southern_europe: "EUROPA MERIDIONALE",
    northern_europe: "EUROPA SETTENTRIONALE",
    great_britain: "GRAN BRETAGNA",
    iceland: "ISLANDA",
    ukraine: "UCRAINA",
    middle_east: "MEDIO ORIENTE",
    afghanistan: "AFGHANISTAN",
    ural: "URALI",
    india: "INDIA",
    china: "CINA",
    siberia: "SIBERIA",
    yakursk: "JACUZIA",
    irkutsk: "CITA",
    mongolia: "MONGOLIA",
    japan: "GIAPPONE",
    kamchatka: "KAMCHATKA",
    siam: "SIAM",
    indonesia: "INDONESIA",
    new_guinea: "NUOVA GUINEA",
    western_australia: "AUSTRALIA OCCIDENTALE",
    eastern_australia: "AUSTRALIA ORIENTALE",
    scandinavia: "SCANDINAVIA",
}

module.exports = {
    initializeGame,
    shuffle,
    rollDice,
    getCardsValue,
    italianNames,
}
