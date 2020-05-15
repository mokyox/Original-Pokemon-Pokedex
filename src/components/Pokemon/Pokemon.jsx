import React from "react";
import { Container } from "./styles";
import { PokemonTypeBadge } from "../PokemonCard/styles";

const Pokemon = ({ name, id, image, type, stats, description, ability }) => {
    return (
        <Container>
            <div className="card bg-dark pt-2 p-3 mx-auto">
                <div className="text-nowrap p-1">
                    <h1>{name}</h1>
                    <h3>#{id}</h3>
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
                        height="96px"
                        width="96px"
                    />
                    {Object.entries(stats).map(([stat, value]) => {
                        return (
                            <div key={stat} className="p-2">
                                <span className="font-weight-bold">{stat}</span>
                                <span>:{value}</span>
                            </div>
                        );
                    })}

                    <span className="text-capitalize p-3">
                        <span className="font-weight-bold">Abilities: </span>
                        {ability}
                    </span>
                    <p className="p-1">{description}</p>
                </div>
            </div>
        </Container>
    );
};

export default Pokemon;
