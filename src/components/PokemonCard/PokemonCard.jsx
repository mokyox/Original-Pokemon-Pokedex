import React from "react";
import Link from "next/link";
import {
  PokemonTypeBadgeContainer,
  PokemonTypeBadge,
  PokemonName,
  PokemonNumber,
  PokemonCardContainer,
} from "./styles";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const PokemonCard = ({ name, id, image, type, scrollPosition }) => {
  return (
    <PokemonCardContainer data-testid="pokemon-card">
      <Link href={`/pokemon/[id]`} as={`/pokemon/${id}`}>
        <a>
          <PokemonName>{name}</PokemonName>
        </a>
      </Link>
      <PokemonNumber>#{id}</PokemonNumber>
      <PokemonTypeBadgeContainer>
        {type.map((type) => (
          <PokemonTypeBadge key={type} type={type}>
            {type}
          </PokemonTypeBadge>
        ))}
      </PokemonTypeBadgeContainer>

      <div>
        <LazyLoadImage
          src={image}
          alt={`pokemon: ${name}`}
          height="96px"
          width="96px"
          effect="blur"
          scrollPosition={scrollPosition}
        />
      </div>
    </PokemonCardContainer>
  );
};

export default trackWindowScroll(PokemonCard);
