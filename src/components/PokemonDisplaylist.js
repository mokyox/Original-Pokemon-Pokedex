import React, { Component } from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
import pokedex from "./pokedex";
import description from "./description";
import abilities from "./abilities";

class PokemonDisplaylist extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      description: [],
      ability: [],
      searchbardata: ""
    };
  }

  async componentDidMount() {
    const pokemonData = pokedex;
    const pokemonDescription = description;
    const pokemonAbilities = abilities.map(ability => {
      return ability.map(ability => ability.ability.name).join(" / ");
    });
    this.setState({
      pokemon: pokemonData,
      description: pokemonDescription,
      ability: pokemonAbilities
    });
  }

  // onSearchChange = event => {
  //   //update state of searchbardata so we can see our pokemon
  //   //Arrow functions make sure that the this value is bound to where it was created
  //   console.log("data: " + this.state.searchbardata);
  //   this.setState({ searchbardata: event.target.value });
  // };
  render() {
    const { pokemon, description, ability } = this.state;
    // const pokemonFiltered = this.state.pokemon.filter(pokemon => {
    //   return pokemon.name
    //     .toLowerCase()
    //     .includes(this.state.searchbardata.toLowerCase());
    // });
    return (
      <div>
        <div className="row">
          {pokemon.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name.english}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.id
              }.png?raw=true`}
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
      </div>
    );
  }
}
export default PokemonDisplaylist;
