import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchbardata: ""
    };
  }

  async componentDidMount() {
    //Multiple API calls? Use Promise.all([promise, promise2, promise3,])

    const urls = [
      "https://pokeapi.co/api/v2/pokemon/?limit=28",
      "https://pokeapi.co/api/v2/pokemon-species/"
    ];
    const pokemonData = await axios.get(urls[0]);
    const pokemonSpecies = await axios.get(urls[1]);

    this.setState({
      pokemon: pokemonData.data["results"],
      description: pokemonSpecies.data["results"]
      //How can I get map over the value for description and feed the data as props for my Pokemon card component?
    });
  }
  onSearchChange = event => {
    //update state of searchbardata so we can see our pokemon
    this.setState({ searchbardata: event.target.value });
  };
  render() {
    //Feature: Searchbox that allows you to search for individual Pokemon
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
export default PokemonList;
