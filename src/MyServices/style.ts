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
  display: flex;
  justify-content: space-between;
  height: 25rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-gray-700);
    width: 22rem;
    border-radius: 1rem;
    border: 2px solid var(--color-blue-500);

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
`;
