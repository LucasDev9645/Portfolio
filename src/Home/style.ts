import { styled } from "styled-components";

import { Title } from "../styles/globalStyle";

export const StyledHome = styled.section`
  margin-top: 12.5rem;

  ${Title} {
    width: 19ch;
  }

  h2 {
    margin-bottom: 1rem;
    color: var(--color-white);
  }
`;

export const DescriptionHome = styled.p`
  max-width: 45rem;
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 2rem;
`;
