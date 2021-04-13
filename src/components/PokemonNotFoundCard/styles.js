import styled from "styled-components";
import { device } from "../../styles/media";

export const EmojiWrapper = styled.span`
  font-size: 1rem;
`;

export const NotFoundCard = styled.div`
  background-color: #dc2626;
  border-radius: 10px;
  padding: 1rem;
  grid-column-start: 2;
  grid-column-end: 4;

  @media ${device.tablet} {
    max-width: 100%;
    padding: 2rem;
  }
`;
