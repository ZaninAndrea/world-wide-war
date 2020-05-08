const getCountries = () => ({
    alaska: {
        neighbours: ["northwest_territory", "alberta", "kamchatka"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    northwest_territory: {
        neighbours: ["alaska", "alberta", "ontario", "greenland"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    greenland: {
        neighbours: ["quebec", "ontario", "northwest_territory", "iceland"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    quebec: {
        neighbours: ["greenland", "ontario", "eastern_united_states"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    ontario: {
        neighbours: [
            "quebec",
            "greenland",
            "northwest_territory",
            "alberta",
            "western_united_states",
            "eastern_united_states",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    alberta: {
        neighbours: [
            "alaska",
            "northwest_territory",
            "ontario",
            "western_united_states",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    western_united_states: {
        neighbours: [
            "alberta",
            "ontario",
            "eastern_united_states",
            "central_america",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    eastern_united_states: {
        neighbours: [
            "quebec",
            "ontario",
            "western_united_states",
            "central_america",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    central_america: {
        neighbours: [
            "western_united_states",
            "eastern_united_states",
            "venezuela",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    venezuela: {
        neighbours: ["central_america", "brazil", "peru"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    brazil: {
        neighbours: ["venezuela", "peru", "argentina", "north_africa"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    peru: {
        neighbours: ["brazil", "venezuela", "argentina"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    argentina: {
        neighbours: ["peru", "brazil"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    north_africa: {
        neighbours: [
            "brazil",
            "western_europe",
            "southern_europe",
            "egypt",
            "east_africa",
            "congo",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    egypt: {
        neighbours: [
            "middle_east",
            "southern_europe",
            "western_europe",
            "north_africa",
            "east_africa",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    east_africa: {
        neighbours: [
            "egypt",
            "north_africa",
            "congo",
            "south_africa",
            "madagascar",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    congo: {
        neighbours: ["south_africa", "east_africa", "north_africa"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    south_africa: {
        neighbours: ["madagascar", "east_africa", "congo"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    madagascar: {
        neighbours: ["south_africa", "east_africa"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    western_europe: {
        neighbours: [
            "north_africa",
            "southern_europe",
            "northern_europe",
            "great_britain",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    southern_europe: {
        neighbours: [
            "western_europe",
            "north_africa",
            "egypt",
            "middle_east",
            "ukraine",
            "northern_europe",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    northern_europe: {
        neighbours: [
            "great_britain",
            "western_europe",
            "southern_europe",
            "ukraine",
            "scandinavia",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    great_britain: {
        neighbours: [
            "western_europe",
            "northern_europe",
            "scandinavia",
            "iceland",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    iceland: {
        neighbours: ["greenland", "scandinavia", "great_britain"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    ukraine: {
        neighbours: [
            "scandinavia",
            "northern_europe",
            "southern_europe",
            "middle_east",
            "afghanistan",
            "ural",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    middle_east: {
        neighbours: [
            "egypt",
            "southern_europe",
            "ukraine",
            "afghanistan",
            "india",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    afghanistan: {
        neighbours: ["middle_east", "ukraine", "ural", "china", "india"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    ural: {
        neighbours: ["ukraine", "afghanistan", "china", "siberia"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    india: {
        neighbours: ["middle_east", "afghanistan", "china", "siam"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    china: {
        neighbours: [
            "india",
            "afghanistan",
            "ural",
            "siberia",
            "mongolia",
            "siam",
        ],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    siberia: {
        neighbours: ["yakursk", "irkutsk", "mongolia", "china", "ural"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    yakursk: {
        neighbours: ["siberia", "irkutsk", "kamchatka"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    irkutsk: {
        neighbours: ["siberia", "yakursk", "kamchatka", "mongolia"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    mongolia: {
        neighbours: ["kamchatka", "irkutsk", "siberia", "china", "japan"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    japan: {
        neighbours: ["mongolia", "kamchatka"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    kamchatka: {
        neighbours: ["japan", "alaska", "yakursk", "irkutsk", "mongolia"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    siam: {
        neighbours: ["india", "china", "indonesia"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    indonesia: {
        neighbours: ["siam", "new_guinea", "western_australia"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    new_guinea: {
        neighbours: ["indonesia", "western_australia", "eastern_australia"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    western_australia: {
        neighbours: ["indonesia", "new_guinea", "eastern_australia"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    eastern_australia: {
        neighbours: ["new_guinea", "western_australia"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
    scandinavia: {
        neighbours: ["ukraine", "northern_europe", "iceland", "great_britain"],
        owner: null,
        tanks: 0,
        color: "grey",
    },
})

const continents = {
    north_america: {
        countries: [
            "alaska",
            "northwest_territory",
            "greenland",
            "quebec",
            "ontario",
            "alberta",
            "western_united_states",
            "eastern_united_states",
            "central_america",
        ],
        tanks: 5,
    },
    south_america: {
        countries: ["venezuela", "brazil", "peru", "argentina"],
        tanks: 2,
    },
    europe: {
        countries: [
            "western_europe",
            "southern_europe",
            "northern_europe",
            "great_britain",
            "iceland",
            "ukraine",
            "scandinavia",
        ],
        tanks: 5,
    },
    asia: {
        countries: [
            "middle_east",
            "afghanistan",
            "ural",
            "india",
            "china",
            "siberia",
            "yakursk",
            "irkutsk",
            "mongolia",
            "japan",
            "kamchatka",
            "siam",
        ],
        tanks: 7,
    },
    africa: {
        countries: [
            "north_africa",
            "egypt",
            "east_africa",
            "congo",
            "south_africa",
            "madagascar",
        ],
        tanks: 0,
    },
    oceania: {
        countries: [
            "indonesia",
            "new_guinea",
            "western_australia",
            "eastern_australia",
        ],
        tanks: 2,
    },
}

const getCards = () => [
    { country: "alaska", type: "fante", text: "ALASKA" },
    {
        country: "northwest_territory",
        type: "cannone",
        text: "TERRITORI DEL NORD OVEST",
    },
    { country: "greenland", type: "cavallo", text: "GROENLANDIA" },
    { country: "quebec", type: "cannone", text: "QUEBEC" },
    { country: "ontario", type: "cavallo", text: "ONTARIO" },
    { country: "alberta", type: "fante", text: "ALBERTA" },
    {
        country: "western_united_states",
        type: "fante",
        text: "STATI UNITI OCCIDENTALI",
    },
    {
        country: "eastern_united_states",
        type: "cannone",
        text: "STATI UNITI ORIENTALI",
    },
    { country: "central_america", type: "cavallo", text: "AMERICA CENTRALE" },
    { country: "venezuela", type: "cannone", text: "VENEZUELA" },
    { country: "brazil", type: "cannone", text: "BRASILE" },
    { country: "peru", type: "cavallo", text: "PERÙ" },
    { country: "argentina", type: "fante", text: "ARGENTINA" },
    { country: "north_africa", type: "fante", text: "AFRICA DEL NORD" },
    { country: "egypt", type: "fante", text: "EGITTO" },
    { country: "east_africa", type: "cannone", text: "AFRICA ORIENTALE" },
    { country: "congo", type: "cavallo", text: "CONGO" },
    { country: "south_africa", type: "cannone", text: "AFRICA DEL SUD" },
    { country: "madagascar", type: "fante", text: "MADAGASCAR" },
    { country: "western_europe", type: "fante", text: "EUROPA OCCIDENTALE" },
    { country: "southern_europe", type: "cavallo", text: "EUROPA MERIDIONALE" },
    {
        country: "northern_europe",
        type: "cavallo",
        text: "EUROPA SETTENTRIONALE",
    },
    { country: "great_britain", type: "cavallo", text: "GRAN BRETAGNA" },
    { country: "iceland", type: "fante", text: "ISLANDA" },
    { country: "ukraine", type: "cannone", text: "UCRAINA" },
    { country: "middle_east", type: "cannone", text: "MEDIO ORIENTE" },
    { country: "afghanistan", type: "fante", text: "AFGHANISTAN" },
    { country: "ural", type: "cavallo", text: "URALI" },
    { country: "india", type: "fante", text: "INDIA" },
    { country: "china", type: "cavallo", text: "CINA" },
    { country: "siberia", type: "cannone", text: "SIBERIA" },
    { country: "yakursk", type: "cavallo", text: "JACUZIA" },
    { country: "irkutsk", type: "fante", text: "CITA" },
    { country: "mongolia", type: "cannone", text: "MONGOLIA" },
    { country: "japan", type: "fante", text: "GIAPPONE" },
    { country: "kamchatka", type: "cavallo", text: "KAMCHATKA" },
    { country: "siam", type: "cannone", text: "SIAM" },
    { country: "indonesia", type: "cavallo", text: "INDONESIA" },
    { country: "new_guinea", type: "cavallo", text: "NUOVA GUINEA" },
    {
        country: "western_australia",
        type: "cannone",
        text: "AUSTRALIA OCCIDENTALE",
    },
    {
        country: "eastern_australia",
        type: "fante",
        text: "AUSTRALIA ORIENTALE",
    },
    { country: "scandinavia", type: "cannone", text: "SCANDINAVIA" },
    { type: "jolly" },
    { type: "jolly" },
]

const objectives = [
    {
        text:
            "Devi distruggere le armate rosse, se sei tu o se sono state elimitate conquista 24 territori",
    },
    {
        text:
            "Devi distruggere le armate gialle, se sei tu o se sono state elimitate conquista 24 territori",
    },
    {
        text:
            "Devi distruggere le armate blu, se sei tu o se sono state elimitate conquista 24 territori",
    },
    {
        text:
            "Devi distruggere le armate arancio, se sei tu o se sono state elimitate conquista 24 territori",
    },
    {
        text:
            "Devi distruggere le armate verdi, se sei tu o se sono state elimitate conquista 24 territori",
    },
    {
        text:
            "Devi distruggere le armate beige, se sei tu o se sono state elimitate conquista 24 territori",
    },
    { text: "Conquista la totalità dell'Asia e dell'Africa" },
    { text: "Devi conquistare 24 territori a tua scelta" },
    {
        text:
            "Devi conquistare 18 territori ed occupare ciascuno con almeno 2 armate",
    },
    {
        text:
            "Devi conquistare l'Europa, l'Oceania ed un terzo continente a scelta",
    },
    { text: "Devi conquistare il Nord America e l'Oceania" },
    {
        text:
            "Devi conquistare l'Europa, il Sud America e un terzo continente a scelta",
    },
    { text: "Devi conquistare il Nord America e l'Africa" },
    { text: "Devi conquistare la totalità dell'Asia e del Sud America" },
]

module.exports = {
    getCards,
    getCountries,
    continents,
    objectives,
}
