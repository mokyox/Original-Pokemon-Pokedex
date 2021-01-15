import styled from "styled-components";
import { colors } from "../utils";

export const PokemonCard = styled.div``;

export const PokemonName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const PokemonNumber = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const PokemonTypeBadge = styled.span`
  background-color: ${({ type }) => colors[type]};
`;
