import styled from "styled-components";
import { device } from "../../styles/media";

export const PokemonContainer = styled.div`
  padding: 3rem 6rem;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;
