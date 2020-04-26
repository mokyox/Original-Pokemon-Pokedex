//Stop page from refreshing when a user 'submits' their search input
const handleSubmit = (event) => {
    event.preventDefault();
};

const filterOutPokemon = (pokemon, term) => {
    return pokemon.filter((monster) => {
        return monster.name.english.toLowerCase().includes(term.toLowerCase());
    });
};

//https://bulbapedia.bulbagarden.net/wiki/Type
const colors = {
    Normal: "#A8A878",
    Fighting: "#C03028",
    Flying: "#A890F0",
    Poison: "#A040A0",
    Ground: "#E0C068",
    Rock: "#B8A038",
    Bug: "#A8B820",
    Ghost: "#705898",
    Steel: "#B8B8D0",
    Fire: "#F08030",
    Water: "#6890F0",
    Grass: "#78C850",
    Electric: "#F8D030",
    Psychic: "#F85888",
    Ice: "#98D8D8",
    Dragon: "#7538FB",
    Dark: "#705848",
    Fairy: "#EE99AC",
};

export { filterOutPokemon, handleSubmit, colors };
