import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard/PokemonCard";

class PokemonDisplaylist extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchbardata: ""
    };
  }

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const pokemonData = await axios.get(url);

    this.setState({
      pokemon: pokemonData.data["results"]
    });
  }
  onSearchChange = event => {
    //update state of searchbardata so we can see our pokemon
    this.setState({ searchbardata: event.target.value });
  };
  render() {
    //Feature idea: Searchbox that allows you to search for individual Pokemon by name or type
    // const pokemonFiltered = this.state.pokemon.filter(pokemon => {
    //   return pokemon.name
    //     .toLowerCase()
    //     .includes(this.state.searchbardata.toLowerCase());
    // });
    if (this.state.pokemon.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="row">
          {/*Feature: searchbox */}
          {/* <SearchBox searchChange={this.onSearchChange} /> */}
          {/*Add pokemon={pokemonFiltered back into PokemonList}*/}
          {this.state.pokemon.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default PokemonDisplaylist;
