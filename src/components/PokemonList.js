import React, { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard/PokemonCard";
import pokedex from "../data/pokedex";
import descriptions from "../data/descriptions";
import abilities from "../data/abilities";

const PokemonList = ({ searchTerm }) => {
    const [pokemon, setPokemon] = useState([]);
    const [description, setDescription] = useState([]);
    const [ability, setAbility] = useState([]);

    useEffect(() => {
        //Get pokemon data
        setPokemon(pokedex);
        setDescription(descriptions);
        setAbility(
            abilities.map((ability) => {
                return ability
                    .map((ability) => ability.ability.name)
                    .join(" / ");
            })
        );
    }, [setPokemon, setDescription, setAbility]);

    //This filtering is causing alot of re-renders
    //How can we solve this?

    const filteredPokemon = pokemon.filter((pokemon) => {
        return pokemon.name.english
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
    });

    console.log(filteredPokemon);

    if (filteredPokemon === []) {
        console.log("No pokemon found. Please refine your search.");
    }
    return (
        <div className="row">
            {filteredPokemon.map((pokemon) => (
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
            ))}
        </div>
    );
};

export default PokemonList;
