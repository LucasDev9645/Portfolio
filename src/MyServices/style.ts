import { styled } from "styled-components";

import { Title } from "../styles/globalStyle";

export const ServicesStyle = styled.section`
  text-align: center;

  ${Title} {
    width: 9ch;
  }
`;

export const ListServices = styled.section`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-gray-700);
    width: 22rem;
    border-radius: 1rem;
    border: 2px solid var(--color-blue-500);
    height: 24.6rem;

    img {
      max-width: 5.625rem;
    }

    h2 {
      color: var(--color-blue-500);
    }

    p {
      max-width: 17rem;
      font-size: 1.125rem;
      font-style: italic;
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    div {
      width: 18rem;

      h2 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;

    div {
      width: 22rem;

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.125rem;
      }
    }
  }

  @media (max-width: 560px) {
    div {
      width: 18rem;

      h2 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
