import styled from "styled-components";
import { device } from "../../styles/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: 4rem;
  padding: 0.75rem;

  @media ${device.tablet} {
    margin-top: 8rem;
    padding: 4rem;
  }
`;
export const Card = styled.div`
  font-size: 0.8rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #374151;
  border-radius: 10px;
  max-width: 600px;

  @media ${device.tablet} {
    font-size: 1rem;
    padding: 1rem 1rem 1.5rem;
  }
`;

export const NavigationContainer = styled.div`
  margin-top: 1rem;

  a {
    font-size: 0.6rem;
    font-weight: 600;
    padding: 0.6rem;
    background-color: #374151;
    margin: 0 5px;
    border-radius: 10px;
    text-transform: uppercase;

    @media ${device.tablet} {
      font-size: 1rem;
      padding: 0.75rem;
      margin: 0 10px;
    }
  }
`;

export const PokemonAbility = styled.h4`
  text-transform: capitalize;
  span {
    font-weight: 600;
  }
`;

export const PokemonStatContainer = styled.div`
  margin: 10px 0;
`;

export const PokemonStatName = styled.span`
  font-weight: 600;
`;

export const PokemonStatValue = styled.span`
  font-weight: 300;
`;

export const PokemonDescription = styled.p`
  margin-top: 20px;
`;
