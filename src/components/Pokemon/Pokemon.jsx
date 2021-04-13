import React from "react";
import Link from "next/link";
import {
  Container,
  Card,
  NavigationContainer,
  PokemonAbility,
  PokemonStatContainer,
  PokemonStatName,
  PokemonStatValue,
  PokemonDescription,
} from "./styles";
import {
  PokemonTypeBadgeContainer,
  PokemonTypeBadge,
  PokemonName,
  PokemonNumber,
} from "../PokemonCard/styles";

const Pokemon = ({ name, id, image, type, stats, description, ability }) => {
  return (
    <Container>
      <Card>
        <PokemonName>{name}</PokemonName>
        <PokemonNumber>#{id}</PokemonNumber>
        <PokemonTypeBadgeContainer>
          {type.map((type) => (
            <PokemonTypeBadge key={type} type={type}>
              {type}
            </PokemonTypeBadge>
          ))}
        </PokemonTypeBadgeContainer>

        <img src={image} alt={`pokemon: ${name}`} height="96px" width="96px" />
        <PokemonAbility>
          <span>Abilities: </span>
          {ability}
        </PokemonAbility>
        {Object.entries(stats).map(([stat, value]) => {
          return (
            <PokemonStatContainer key={stat}>
              <PokemonStatName>{stat}</PokemonStatName>
              <PokemonStatValue>: {value}</PokemonStatValue>
            </PokemonStatContainer>
          );
        })}
        <PokemonDescription>{description}</PokemonDescription>
      </Card>

      <NavigationContainer>
        {id > 1 && (
          <Link href={`/pokemon/[id]`} as={`/pokemon/${id - 1}`}>
            <a>Previous Pokemon</a>
          </Link>
        )}
        <Link href="/">
          <a>Go home</a>
        </Link>
        {id < 151 && (
          <Link href={`/pokemon/[id]`} as={`/pokemon/${id + 1}`}>
            <a>Next Pokemon</a>
          </Link>
        )}
      </NavigationContainer>
    </Container>
  );
};

export default Pokemon;
