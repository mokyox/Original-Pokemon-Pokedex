import { filterOutPokemon } from "./utils";
import pokedex from "../data/pokedex";

describe("Filtering of pokemon", () => {
    const pokemon = pokedex;
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