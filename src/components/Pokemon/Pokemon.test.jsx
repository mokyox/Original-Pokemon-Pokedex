import React from "react";
import Pokemon from "./Pokemon";
import renderer from "react-test-renderer";

describe("<Pokemon/>", () => {
  const pokemonInfo = {
    id: 1,
    name: "Bulbasaur",
    image: "",
    type: ["Grass", "Poison"],
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    ability: ["Chlorophyll", "Overgrow"],
    stats: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 45,
    },
  };
  it("renders correctly", () => {
    const tree = renderer.create(<Pokemon {...pokemonInfo} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
