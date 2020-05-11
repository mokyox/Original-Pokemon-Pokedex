import React from "react";
import { render, cleanup } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

const props = {
    name: "Mew",
    id: 151,
    image: "",
    hp: 100,
    attack: 100,
    defense: 100,
    specialAttack: 100,
    specialDefence: 100,
    speed: 100,
    type: ["Psychic"],
    description:
        "Mew is said to possess the genetic composition of all Pokémon.",
    ability: "Synchronize",
};

describe("<PokemonCard/>", () => {
    afterEach(cleanup);
    it("Should render a PokemonCard with given props", () => {
        const { getByTestId } = render(<PokemonCard {...props} />);
        const card = getByTestId("pokemon-card");
        expect(card).toBeTruthy();
    });
});
