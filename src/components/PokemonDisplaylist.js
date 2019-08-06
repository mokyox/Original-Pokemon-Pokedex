import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard/PokemonCard";
import SearchBox from "./searchbox";

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
    //Arrow functions make sure that the this value is bound to where it was created
    this.setState({ searchbardata: event.target.value });
  };
  render() {
    const pokemonFiltered = this.state.pokemon.filter(pokemon => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.searchbardata.toLowerCase());
    });
    if (this.state.pokemon.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h1>Pokedex</h1>
        {<SearchBox searchChange={this.onSearchChange} />}
        <div className="row ">
          {pokemonFiltered.map(pokemon => (
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
