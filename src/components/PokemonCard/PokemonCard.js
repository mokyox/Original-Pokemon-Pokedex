import React from "react";
import { PokemonCardStyle } from "./styles";
import { colors } from "../utils";

const PokemonCard = ({
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
    description,
    ability,
}) => {
    return (
        <>
            <PokemonCardStyle />
            <div className="card-container col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                <div className="card bg-dark text-white">
                    <div className="text-nowrap p-1">
                        <h4 className="pokemon-name">{name}</h4>
                        <p>#{id}</p>
                        {type.map((type) => (
                            <span
                                style={{
                                    backgroundColor: `${colors[type]}`,
                                }}
                                className="p-1 m-1 badge"
                                key={type}
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                    <div className="card-body">
                        <img
                            src={image}
                            alt={`pokemon: ${name}`}
                            loading="lazy"
                            height="96px"
                            width="96px"
                        />
                        <div className="card-title text-left">
                            <h5 className="pokemon-stats">Stats</h5>
                            <h6 className="pokemon-stat-title">
                                Ability: <span>{ability}</span>
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
        </>
    );
};

export default PokemonCard;
