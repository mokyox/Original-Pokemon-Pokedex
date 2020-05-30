import styled from "styled-components";
import { device } from "../../styles/media";

export const PokemonContainer = styled.div`
    padding: 2rem;
    margin-top: 4rem;
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

export const EmojiWrapper = styled.span`
    font-size: 2rem;
`;

export const NotFoundCard = styled.div`
    grid-column: 2;
    margin: 0 auto;
    max-width: 75%;

    @media ${device.tablet} {
        max-width: 100%;
        padding: 0.5rem;
    }

    @media ${device.laptop} {
        grid-column-start: 2;
        grid-column-end: 4;
    }
`;
