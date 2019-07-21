import React, { Component } from "react";
import "./PokemonCard.css";
import axios from "axios";

//https://bulbapedia.bulbagarden.net/wiki/Type
const colors = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "##B8B8D0",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7538FB",
  dark: "#70584",
  fairy: "#EE99AC"
};

class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pokemonNumber: "",
      image: "",
      type: [],
      description: ""
    };
  }

  async componentDidMount() {
    const { name, url } = this.props;
    const pokemonNumber = url.replace(/^\D+/g, "").split("/")[2];
    const image = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonNumber}.png?raw=true`;
    const pokemonDataUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
    const pokemonSpeciesDataUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}/`;
    const pokemonDataResponse = await axios.get(pokemonDataUrl);
    const pokemonSpeciesDataResponse = await axios.get(pokemonSpeciesDataUrl);
    console.log(url);

    //Get Abilities of Pokemon
    const ability = pokemonDataResponse.data.abilities
      .map(ability => {
        return ability.ability.name
          .toLowerCase()
          .split("-")
          .map(str => str.charAt(0).toUpperCase() + str.substring(1))
          .join(" ");
      })
      .join("/");

    //Get Types of Pokemon

    const type = pokemonDataResponse.data.types.map(type => {
      return type.type.name;
    });

    //Get Description of Pokemon
    let description = "";
    pokemonSpeciesDataResponse.data.flavor_text_entries.some(text => {
      if (text.language.name === "en") {
        // console.log(text.flavor_text);
        description = text.flavor_text;
      }
      return description;
    });

    this.setState({
      name: name,
      pokemonNumber: pokemonNumber,
      image: image,
      description: description,
      type: type,
      ability: ability
    });
  }
  render() {
    const {
      name,
      image,
      pokemonNumber,
      description,
      type,
      ability
    } = this.state;
    const upperCaseFirstChar = string =>
      string.charAt(0).toUpperCase() + string.substring(1);
    return (
      <div className="card-container col-md-3 col-sm-6 mb-3">
        <div className="card bg-dark text-white">
          <div className="text-nowrap p-1">
            <h4 className="pokemon-name">{upperCaseFirstChar(name)}</h4>
            <p>#{pokemonNumber}</p>
            {type
              .map(type => (
                <span
                  style={{
                    backgroundColor: `${colors[type]}`
                  }}
                  className="p-1 m-1 badge"
                  key={type}
                >
                  {upperCaseFirstChar(type)}
                </span>
              ))
              .reverse()}
          </div>
          <div className="card-body">
            <img src={image} alt={`pokemon: ${name}`} />
            <div className="card-title text-left">
              <h5>Stats</h5>
              <h6 className="pokemon-stat-title">Ability:</h6>
              <span>{ability}</span>
              <p className="pokemon-stat-title">HP</p>
              <p className="pokemon-stat-title">Attack</p>
              <p className="pokemon-stat-title">Defence</p>
              <p className="pokemon-stat-title">Special Attack</p>
              <p className="pokemon-stat-title">Special Defence</p>
              <p className="pokemon-stat-title">Speed</p>
              <p className="pokemon-state-title">Description:</p>
              <span className="description">{description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
