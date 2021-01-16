import React from "react";
import PokemonNotFoundCard from "./PokemonNotFoundCard";
import renderer from "react-test-renderer";

describe("<PokemonNotFoundCard/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PokemonNotFoundCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
