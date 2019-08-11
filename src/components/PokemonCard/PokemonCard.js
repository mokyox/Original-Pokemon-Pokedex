import React, { Component } from "react";
import "./PokemonCard.css";

//https://bulbapedia.bulbagarden.net/wiki/Type
const colors = {
  Normal: "#A8A878",
  Fighting: "#C03028",
  Flying: "#A890F0",
  Poison: "#A040A0",
  Ground: "#E0C068",
  Rock: "#B8A038",
  Bug: "#A8B820",
  Ghost: "#705898",
  Steel: "##B8B8D0",
  Fire: "#F08030",
  Water: "#6890F0",
  Grass: "#78C850",
  Electric: "#F8D030",
  Psychic: "#F85888",
  Ice: "#98D8D8",
  Dragon: "#7538FB",
  Dark: "#70584",
  Fairy: "#EE99AC"
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
  render() {
    const {
      name,
      id,
      image,
      hp,
      attack,
      defense,
      specialAttack,
      specialDefense,
      speed,
      type,
      description
    } = this.props;
    return (
      <div className="card-container col-lg-3 col-md-4 col-sm-6 mb-3">
        <div className="card bg-dark text-white">
          <div className="text-nowrap p-1">
            <h4 className="pokemon-name">{name}</h4>
            <p>#{id}</p>
            {type.map(type => (
              <span
                style={{
                  backgroundColor: `${colors[type]}`
                }}
                className="p-1 m-1 badge"
                key={type}
              >
                {type}
              </span>
            ))}
          </div>
          <div className="card-body">
            <img src={image} alt={`pokemon: ${name}`} />
            <div className="card-title text-left">
              <h5 className="pokemon-stats">Stats</h5>
              <h6 className="pokemon-stat-title">
                Ability: <span />
              </h6>
              <p className="pokemon-stat-title">
                HP: <span>{hp}</span>
              </p>
              <p className="pokemon-stat-title">
                Attack: <span>{attack}</span>
              </p>{" "}
              <p className="pokemon-stat-title">
                Defense: <span>{defense}</span>
              </p>
              <p className="pokemon-stat-title">
                Special Attack: <span>{specialAttack}</span>
              </p>{" "}
              <p className="pokemon-stat-title">
                Special Defense: <span>{specialDefense}</span>
              </p>{" "}
              <p className="pokemon-stat-title">
                Speed: <span>{speed}</span>
              </p>
              <p className="pokemon-stat-title">Description:</p>
              <span className="description">{description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
