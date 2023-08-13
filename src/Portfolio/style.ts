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

        h3 {
          margin-top: 1rem;
          text-align: center;
          font-size: 20px;
        }

        p {
          margin-top: 0.5rem;
          font-size: 1rem;
          font-style: italic;
          height: 5.1rem;
        }
      }
    }
  }
`;

export const ContainerButton = styled.div`
  bottom: 0.5rem;
  display: flex;
  margin-top: 4rem;
  justify-content: space-between;
  align-items: center;

  button {
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: var(--color-blue-500);
    box-shadow: 0 0 5px var(--color-blue-500), 0 0 25px var(--color-blue-500);
    border: none;
    width: 8rem;
    height: 1.8rem;
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

export const ProjectImage = styled.img`
  width: 100%;
  height: 14rem;
`;