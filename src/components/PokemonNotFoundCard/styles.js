import styled from "styled-components";
import { device } from "../../styles/media";

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
