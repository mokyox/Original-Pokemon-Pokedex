import React, { Component } from "react";
import "./PokemonCard.css";
import axios from "axios";
// import { resolveSoa } from "dns";

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
    // Use regex to find numbers and split to get number I want
    const pokemonNumber = url.replace(/^\D+/g, "").split("/")[2];
    const image = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonNumber}.png?raw=true`;

    //Get Types of Pokemon

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
    let type = await axios.get(pokemonUrl).then(res =>
      res.data.types.map(type => {
        return type.type.name;
      })
    );

    //Get Description of Pokemon
    let engDescription = "";
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}/`)
      .then(response => {
        response.data.flavor_text_entries.some(text => {
          if (text.language.name === "en") {
            // console.log(text.flavor_text);
            return (engDescription = text.flavor_text);
            //Only need 1 english description. How can I get only the first result from an array?
            //Filter() will give all of them?
            //Use some() method to return only 1 value that matches if statement
          }
        });
      });

    this.setState({
      name: name,
      pokemonNumber: pokemonNumber,
      image: image,
      description: engDescription,
      type: type
    });
  }
  render() {
    const { name, image, pokemonNumber, description, type } = this.state;
    const upperCaseFirstChar = string =>
      string.charAt(0).toUpperCase() + string.substring(1);
    return (
      <div className="col-md-3 col-sm-6 mb-3">
        <div className=" card bg-dark text-white">
          <div className="text-nowrap p-1">
            <h4>{upperCaseFirstChar(name)}</h4>
            <p>#{pokemonNumber}</p>
            {type.map(type => (
              <span className="p-2" key={type}>
                {console.log(typeof type)}
                {upperCaseFirstChar(type)}
              </span>
            ))}
          </div>
          <div className="card-body">
            <img src={image} alt={`pokemon: ${name}`} />
            <div className="card-title text-left">
              <h6>Description:</h6>
              <p className="description">{description}</p>
              <h5>Stats</h5>
              <p>HP</p>
              <p>Attack</p>
              <p>Defence</p>
              <p>Special Attack</p>
              <p>Special Defence</p>
              <p>Speed</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
