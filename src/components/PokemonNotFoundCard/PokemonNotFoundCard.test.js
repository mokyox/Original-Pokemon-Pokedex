import { render, screen } from "@testing-library/react";

import PokemonNotFoundCard from "./PokemonNotFoundCard";

describe("<PokemonNotFoundCard/>", () => {
  it("should show an emoji with scream", () => {
    render(<PokemonNotFoundCard />);

    expect(screen.getByRole("img")).toHaveTextContent("😱");
  });
});
