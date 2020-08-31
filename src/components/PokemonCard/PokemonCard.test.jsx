import React from "react";
import PokemonCard from "./PokemonCard";
import renderer from "react-test-renderer";

describe("<PokemonCard/>", () => {
    const pokemonInfo = {
        id: 1,
        name: "Bulbasaur",
        image: "",
        type: ["Grass", "Poison"],
    };
    it("renders correctly", () => {
        const tree = renderer.create(<PokemonCard {...pokemonInfo} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
