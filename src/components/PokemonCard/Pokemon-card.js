import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({num, name, image, description, types, abilities, hp, attack, defense, specialAttack, specialDefense, speed}) => {
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
    
      let abilitiesList = abilities.map(ability => ability.ability.name).join(' / ')

    return (
        <div className="card-container col-lg-3 col-md-4 col-sm-6 mb-3">
         <div className="card bg-dark text-white">
            <div className="text-nowrap p-1">
             <h4 className="pokemon-name">{name}</h4>
                <p>#{num}</p>
      
            {types.map(type => 
                <span
                style={{backgroundColor: `${colors[type.type.name]}`}}
                className='p-1 m-1 badge'
                key={Math.random()}
                >
                    {type.type.name}
                </span>
            )}

          </div>

        <div className="card-body">
            <img src={image} alt={`pokemon: ${name}`} />
            <div className="card-title text-left">
              <h5 className="pokemon-stats">Stats</h5>
              <h6 className="pokemon-stat-title">
                Ability: <span>{abilitiesList}</span>
              </h6>
              <p className="pokemon-stat-title">
                HP: <span>{hp}</span>
              </p>
              <p className="pokemon-stat-title">
                Attack: <span>{attack}</span>
              </p>
              <p className="pokemon-stat-title">
                Defense: <span>{defense}</span>
              </p>
              <p className="pokemon-stat-title">
                Special Attack: <span>{specialAttack}</span>
              </p>
              <p className="pokemon-stat-title">
                Special Defense: <span>{specialDefense}</span>
              </p>
              <p className="pokemon-stat-title">
                Speed: <span>{speed}</span>
              </p>
              <p className="pokemon-stat-title">Description:</p>
              <span className="description">{description}</span>
            </div>
          </div>
          </div>
        </div>
    )
}

export default PokemonCard