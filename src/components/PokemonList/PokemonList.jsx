import React, { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonNotFoundCard from "../PokemonNotFoundCard/PokemonNotFoundCard";
import pokedex from "../../data/pokedex";
import descriptions from "../../data/descriptions";
import abilities from "../../data/abilities";
import { PokemonContainer } from "./styles";
import { filterOutPokemon } from "../utils";

const PokemonList = ({ searchTerm }) => {
  const [pokemon, setPokemon] = useState([]);
  const [description, setDescription] = useState([]);
  const [ability, setAbility] = useState([]);
  const [isPokemonLoaded, setIsPokemonLoaded] = useState(false);

  useEffect(() => {
    setPokemon(pokedex);
    setDescription(descriptions);
    setAbility(
      abilities.map((ability) => {
        return ability.map((ability) => ability.ability.name).join(" / ");
      })
    );
    setIsPokemonLoaded(true);
  }, []);

  const filteredPokemon = filterOutPokemon(pokemon, searchTerm);

  return (
    <PokemonContainer data-testid="pokemon-list">
      {!isPokemonLoaded || filteredPokemon.length > 0 ? (
        filteredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name.english}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png?raw=true`}
            hp={pokemon.base["HP"]}
            attack={pokemon.base["Attack"]}
            defense={pokemon.base["Defense"]}
            specialAttack={pokemon.base["Sp. Attack"]}
            specialDefense={pokemon.base["Sp. Defense"]}
            speed={pokemon.base["Speed"]}
            type={pokemon.type}
            description={description[pokemon.id - 1]}
            ability={ability[pokemon.id - 1]}
          />
        ))
      ) : (
        <PokemonNotFoundCard />
      )}
    </PokemonContainer>
  );
};

export default PokemonList;
