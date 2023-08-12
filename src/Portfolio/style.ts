import { styled } from "styled-components";

import { Title } from "../styles/globalStyle";
import { TagContainer } from "../Tag/style";

export const PortfolioContainer = styled.section`
  ${Title} {
    width: 14ch;
  }

  ${TagContainer} {
    margin: 0.2rem;
  }

  div {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;

      li {
        padding: 0.6rem;
        border-radius: 0.7rem;
        width: 23.75rem;
        height: 31.25rem;
        background: #373737;
        color: var(--color-gray-300);

        img {
          max-width: 100%;
          pointer-events: none;
        }

        h3 {
          margin-top: 1rem;
          text-align: center;
          font-size: 20px;
        }

        p {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          font-style: italic;
        }
      }
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;

  button {
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: var(--color-blue-500);
    box-shadow: 0 0 5px var(--color-blue-500), 0 0 25px var(--color-blue-500);
    border: none;
    width: 7rem;
    height: 1.6rem;
    font-weight: 700;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-transform: uppercase;

    img {
      width: 1.125rem;
    }
  }
`;
