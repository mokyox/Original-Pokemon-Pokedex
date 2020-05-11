import React from "react";
import { PokemonTypeBadge, PokemonName, PokemonNumber } from "./styles";

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
            <div
                data-testid="pokemon-card"
                className="card-container col-lg-3 col-md-4 col-sm-6 col-12 mb-3"
            >
                <div className="card bg-dark text-white">
                    <div className="text-nowrap p-1">
                        <PokemonName>{name}</PokemonName>
                        <PokemonNumber>#{id}</PokemonNumber>
                        {type.map((type) => (
                            <PokemonTypeBadge
                                className="p-1 m-1 badge"
                                key={type}
                                type={type}
                            >
                                {type}
                            </PokemonTypeBadge>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default PokemonCard;
