import styled from "styled-components";
import { device } from "../../styles/media";

export const PageNavbar = styled.nav`
    padding: 1rem;
    p {
        font-size: 1.5rem;
        font-weight: 600;
        @media ${device.tablet} {
            font-size: 1.75em;
        }
        input {
            padding: 1px;
        }
    }
`;
