import styled from "styled-components";
import { device } from "../../styles/media";

export const Card = styled.div`
    padding: 0.5rem 1rem;
    @media ${device.tablet} {
        padding: 2rem;
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 2rem 1rem;
    font-size: 0.75rem;
    @media ${device.tablet} {
        padding: 4rem;
        font-size: 1.1rem;
    }
`;
