import React from "react";
import { Container, Card } from "./styles";
import { PokemonTypeBadge } from "../PokemonCard/styles";

const Pokemon = ({ name, id, image, type, stats, description, ability }) => {
    return (
        <Container>
            <Card className="card bg-dark">
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
                    <p className="text-capitalize">
                        <span className="font-weight-bold">Abilities: </span>
                        {ability}
                    </p>
                    {Object.entries(stats).map(([stat, value]) => {
                        return (
                            <div key={stat} className="p-2">
                                <span className="font-weight-bold">{stat}</span>
                                <span>: {value}</span>
                            </div>
                        );
                    })}

                    <p className="p-1 mt-2">{description}</p>
                </div>
            </Card>
        </Container>
    );
};

export default Pokemon;
