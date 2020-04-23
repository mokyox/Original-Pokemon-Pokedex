import React from "react";
import { render } from "@testing-library/react";
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
        "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will,so it entirely avoids notice even if it approaches people.",
    ability: "Synchronize",
};

describe("<PokemonCard/>", () => {
    it("Should render a PokemonCard", () => {
        const { getByTestId } = render(<PokemonCard {...props} />);
        const card = getByTestId("pokemon-card");
        expect(card).toBeTruthy();
    });
});
