import styled from "styled-components";
import { device } from "../../styles/media";

export const PageNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #374151;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1rem;
  p {
    font-size: 1.5rem;
    font-weight: 600;
    @media ${device.tablet} {
      font-size: 1.75em;
    }
    input {
      padding: 1rem;
    }
  }
`;

export const StyledInput = styled.input`
  padding: 0.75rem;
  border-radius: 10px;
`;
