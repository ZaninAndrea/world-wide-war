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

module.exports = {
    initializeGame,
    shuffle,
    rollDice,
    getCardsValue,
}
