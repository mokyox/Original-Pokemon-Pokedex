import styled from "styled-components";
import { device } from "../../styles/media";

export const Card = styled.div`
    display: inline-block;
    height: 500px;
    padding: 0.5rem 1rem;
    max-width: 400px;
    max-height: 625px;
    margin: 0 auto;
    margin-bottom: 1rem;

    @media ${device.tablet} {
        padding: 1rem 2rem 1.5rem;
        max-width: 600px;
        height: 600px;
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 2rem 1rem 0;
    font-size: 0.75rem;

    @media ${device.tablet} {
        padding: 4rem 4rem 0;
        font-size: 1.1rem;
    }
`;

export const NavigationContainer = styled.div`
    margin-top: 1rem;
`;
