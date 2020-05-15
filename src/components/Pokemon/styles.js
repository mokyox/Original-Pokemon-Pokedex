import styled from "styled-components";
import { device } from "../../styles/media";

export const Container = styled.div`
    margin: 0 auto;
    padding: 4rem;
    font-size: 0.75rem;
    @media ${device.tablet} {
        font-size: 1.1rem;
    }
`;
