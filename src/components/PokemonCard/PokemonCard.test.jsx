import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PokemonCard from "./PokemonCard";

const props = {
    name: "Mew",
    id: 151,
    image: "",
    type: ["Psychic"],
    scrollPosition: "",
};

describe("<PokemonCard/>", () => {
    it("Should render a PokemonCard with Mew's data", () => {
        const { getByText } = render(<PokemonCard {...props} />);
        expect(getByText("Mew")).toBeInTheDocument();
    });
});
