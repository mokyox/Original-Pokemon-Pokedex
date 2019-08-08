import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard/Pokemon-card";
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
    let pokemon = []

    // for loop to iterate on the 151 pokemons
    for(let i = 1; i<152 ; i++) {
      // first fetch on the pokemon main infoss
      const example = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      
      // second fetch for the description
      const example2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
      let description = "";
      example2.data.flavor_text_entries.some(text => {
      if (text.language.name === "en") {
        description = text.flavor_text;
      }
      return description;
    });

      // adding description property on the whole bunch of data
      example.data.description = description
      
      // adding the data to the array
      pokemon = [...pokemon, example.data]
    }

    this.setState({
      pokemon
    });
    console.log(this.state.pokemon)
  }

  onSearchChange = event => {
    //update state of searchbardata so we can see our pokemon
    //Arrow functions make sure that the this value is bound to where it was created
    this.setState({ searchbardata: event.target.value });
  };

  render() {
    const pokemonFiltered = this.state.pokemon.filter(pokemon => {
      return pokemon.name
        .includes(this.state.searchbardata.toLowerCase());
    });

    if (this.state.pokemon.length === 0) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>

        <h1>Pokedex</h1>

        <SearchBox searchChange={this.onSearchChange} value={this.state.searchbardata}/>

        <div className="row">
          {pokemonFiltered.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              num={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              description={pokemon.description}
              types={pokemon.types}
              abilities={pokemon.abilities}
              hp={pokemon.stats[5].base_stat}
              attack={pokemon.stats[4].base_stat}
              defense={pokemon.stats[3].base_stat}
              specialAttack={pokemon.stats[2].base_stat}
              specialDefense={pokemon.stats[1].base_stat}
              speed={pokemon.stats[0].base_stat}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default PokemonDisplaylist;
