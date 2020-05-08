import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../utils";

export const PokemonCardStyle = createGlobalStyle`
  .img {
    padding: 30px;
    margin: 10px;
    text-align: center !important;
  }

  .description {
    font-size: 0.85rem;
  }

  .card-container {
    display: flex;
    align-items: stretch;
  }

  .pokemon-name,
  .pokemon-stat-title,
  .pokemon-stats {
    font-weight: 700;
    text-transform: capitalize;
  }

  .pokemon-stats {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .pokemon-stat-title {
    padding: 5px 0px;
    span {
      font-weight: 400;
    }
  }
`;

export const PokemonTypeBadge = styled.span`
    background-color: ${({ type }) => colors[type]};
`;
