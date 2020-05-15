import React from "react";
import Link from "next/link";
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
            {id > 1 ? (
                <Link href={`/pokemon/${id - 1}`}>
                    <a className="text-monospace text-uppercase p-2 m-2 badge badge-dark">
                        Previous Pokemon
                    </a>
                </Link>
            ) : (
                ""
            )}

            <Link href="/">
                <a className="text-monospace text-uppercase p-2 m-2 badge badge-dark">
                    Go home
                </a>
            </Link>
            {id < 151 ? (
                <Link href={`/pokemon/${id + 1}`}>
                    <a className="text-monospace text-uppercase p-2 m-2 badge badge-dark">
                        Next Pokemon
                    </a>
                </Link>
            ) : (
                ""
            )}
        </Container>
    );
};

export default Pokemon;
