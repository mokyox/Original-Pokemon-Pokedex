import styled from "styled-components";
import { colors } from "../utils";
import { device } from "../../styles/media";

export const PokemonCardContainer = styled.div`
  background-color: #374151;
  border-radius: 10px;
  padding: 0.5rem;
`;

export const PokemonName = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const PokemonNumber = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const PokemonTypeBadgeContainer = styled.div`
  margin: 20px 0;
`;

export const PokemonTypeBadge = styled.span`
  background-color: ${({ type }) => colors[type]};
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
`;
