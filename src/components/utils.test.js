import { filterOutPokemon } from "./utils";

describe("Filtering of pokemon", () => {
    const pokemon = [
        {
            id: 1,
            name: {
                english: "Bulbasaur",
            },
        },
        {
            id: 4,
            name: {
                english: "Charmander",
            },
        },
        {
            id: 120,
            name: {
                english: "Staryu",
            },
        },
        {
            id: 121,
            name: {
                english: "Starmie",
            },
        },
        {
            id: 139,
            name: {
                english: "Omastar",
            },
        },
        {
            id: 147,
            name: {
                english: "Dratini",
            },
        },
        {
            id: 151,
            name: {
                english: "Mew",
            },
        },
    ];
    it("should return an array of 3 Pokemon - Staryu, Starmie and Omastar", () => {
        const term = "star";
        const filteredPokemon = filterOutPokemon(pokemon, term);

        expect(filteredPokemon.length).toBe(3);
    });

    it("should return an array of 1 pokemon when search term matches pokemon name - Charmander", () => {
        const term = "Charmander";
        const filteredPokemon = filterOutPokemon(pokemon, term);

        expect(filteredPokemon.length).toBe(1);
    });
    it("should not return any pokemon when search term is an invalid name", () => {
        const term = "I'm not a real search term";
        const filteredPokemon = filterOutPokemon(pokemon, term);

        expect(filteredPokemon.length).toBe(0);
    });
});
