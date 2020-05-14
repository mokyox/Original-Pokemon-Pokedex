/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import { PokemonTypeBadge, PokemonName, PokemonNumber } from "./styles";

const PokemonCard = ({ name, id, image, type, scrollPosition }) => {
    return (
        <>
            <div
                data-testid="pokemon-card"
                className="card-container col-lg-3 col-md-4 col-sm-6 col-12 mb-3"
            >
                <div className="card bg-dark text-white">
                    <div className="text-nowrap p-1">
                        <Link href={`/pokemon/${id}`}>
                            <a>
                                <PokemonName>{name}</PokemonName>
                            </a>
                        </Link>

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
                        <LazyLoadImage
                            src={image}
                            alt={`pokemon: ${name}`}
                            height="96px"
                            width="96px"
                            effect="blur"
                            scrollPosition={scrollPosition}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default trackWindowScroll(PokemonCard);
