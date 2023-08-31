import { styled } from "styled-components";

import { Title } from "../styles/globalStyle";

export const StyledHome = styled.section`
  margin-top: 12.2rem;

  ${Title} {
    width: 19ch;
  }

  h2 {
    margin-bottom: 1rem;
    color: var(--color-white);
  }

  @media (max-width: 1200px) {
    margin-bottom: 9.5rem;

    h2 {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 920px) {
    margin-bottom: 8.7rem;

    h2 {
      margin-bottom: 0.4rem;
    }
  }

  @media (max-width: 560px) {
    margin-bottom: 8.5rem;

    h2 {
      font-size: 1.3rem;
      margin-bottom: 0.4rem;
    }
  }
`;

export const DescriptionHome = styled.p`
  max-width: 45rem;
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    max-width: 43rem;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 920px) {
    max-width: 40rem;
    font-size: 1.3rem;
    margin-bottom: 1.4rem;
  }

  @media (max-width: 560px) {
    max-width: 40rem;
    font-size: 1.1rem;
    margin-bottom: 1.4rem;
  }
`;
