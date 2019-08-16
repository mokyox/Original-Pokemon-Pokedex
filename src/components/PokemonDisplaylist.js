import React, { Component } from "react";
import { connect } from "react-redux";
import PokemonCard from "./PokemonCard/PokemonCard";
import pokedex from "./pokedex";
import description from "./description";
import abilities from "./abilities";
import { setSearchField } from "./actions/actions";
import Navbar from "./navbar";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};
class PokemonDisplaylist extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      description: [],
      ability: []
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

  render() {
    const { description, ability } = this.state;
    const { searchField, onSearchChange } = this.props;

    const pokemonFiltered = this.state.pokemon.filter(pokemon => {
      return pokemon.name.english
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    return (
      <div>
        <div className="row">
          <Navbar searchChange={onSearchChange} />
          {pokemonFiltered.map(pokemon => (
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDisplaylist);
