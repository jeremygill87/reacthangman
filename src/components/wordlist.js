var wordlist = [
    "DAFFODIL",
    "EXISTENT",
    "CASUISTRY",
    "SOPHISTRY",
    "COPIOUS",
    "VERISIMILITUDE",
    "CHIMERICAL",
    "CIRCUITOUS",
    "LUGUBRIOUS",
    "MELANCHOLY",
    "AILUROPHOBIC",
    "VITRIOLIC",
    "HYPERBOLE",
    "SPELUNKING",
    "ACQUISITION",
    "ABYSMAL",
    "ANALAGOUS",
    "EMINENT",
    "EXACERBATE",
    "DEFENESTRATE",
    "QUIXOTIC",
    "ZEALOUS",
    "UNPRECEDENTED",
    "MESMERIZE",
    "RHETORICAL",
    "PENITENCE",
    "OBSEQUIOUS",
    "OSTENTATIOUS",
    "MAVERICK",
    "GRANDIOSE",
    "PHANTASMAGORIA",
    "REDOLENT",
    "ANOMALY",
    "CONTINGENCY",
    "PASTICHE"
]

function getWord() {
    return wordlist[Math.floor(Math.random() * wordlist.length)]
}

export { getWord }