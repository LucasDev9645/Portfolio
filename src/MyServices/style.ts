import { styled } from "styled-components";

export const ServicesStyle = styled.section`
  text-align: center;
`;

export const ListServices = styled.section`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-gray-700);
    width: 22rem;
    height: 25rem;
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
