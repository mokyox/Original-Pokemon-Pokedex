import styled from "styled-components";
import { colors } from "../utils";

export const PokemonCard = styled.div``;

export const PokemonName = styled.h1`
    font-size: 1.2rem;
    font-weight: 500;
`;

export const PokemonNumber = styled.p`
    font-size: 1rem;
`;

export const PokemonTypeBadge = styled.span`
    background-color: ${({ type }) => colors[type]};
`;
