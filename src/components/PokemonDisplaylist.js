import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard/PokemonCard";
import SearchBox from "./searchbox";
import pokedex from "./pokedex";
import description from "./description";

class PokemonDisplaylist extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      description: [],
      searchbardata: ""
    };
  }

  async componentDidMount() {
    const pokemonData = pokedex;
    const pokemonDescription = description;
    // const pokemonRes = await axios.get();

    console.log(pokedex[0].name.english);
    console.log(pokedex[0].type);

    this.setState({ pokemon: pokemonData, description: pokemonDescription });
  }

  // onSearchChange = event => {
  //   //update state of searchbardata so we can see our pokemon
  //   //Arrow functions make sure that the this value is bound to where it was created
  //   console.log("data: " + this.state.searchbardata);
  //   this.setState({ searchbardata: event.target.value });
  // };
  render() {
    const { pokemon, description } = this.state;
    // const pokemonFiltered = this.state.pokemon.filter(pokemon => {
    //   return pokemon.name
    //     .toLowerCase()
    //     .includes(this.state.searchbardata.toLowerCase());
    // });
    if (this.state.pokemon.length === 0) {
      return <h1>Loading...</h1>;
    }
    console.log("We have", this.state.pokemon);
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="row">
          {pokemon.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name.english}
              image={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${
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
            />
          ))}
        </div>
      </div>
    );
  }
}
export default PokemonDisplaylist;
