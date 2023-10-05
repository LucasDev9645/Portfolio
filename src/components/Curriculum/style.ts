import { styled } from "styled-components";

import { Title } from "../../styles/globalStyle";

export const StylesCurriculumContainer = styled.div`
  ${Title} {
    width: 10ch;
  }
`;

export const StylesCurriculum = styled.div`
  height: 25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.125rem;
    font-style: italic;
    margin-bottom: 1.4rem;
    line-height: 1.4;
    span {
      font-style: normal;
      margin-left: 2rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26.875rem;
    height: 5rem;
    background-color: var(--color-gray-700);
    border-radius: 1rem;
    border: none;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-blue-500);
    cursor: pointer;

    img {
      margin-right: 1rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1200px) {
    img {
      max-width: 28.125rem;
    }

    p {
      font-size: 1rem;
      span {
        margin-left: 1.5rem;
      }
    }

    button {
      width: 25rem;
      height: 4.5rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 920px) {
    flex-direction: column;

    img {
      max-width: 30rem;
    }

    p {
      font-size: 1.125rem;
      margin-top: 1.5rem;
    }

    button {
      width: 26.875rem;
      height: 5rem;
      font-size: 1.125rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 560px) {
    img {
      max-width: 19rem;
    }

    p {
      font-size: 0.8rem;
      margin-top: 1rem;
    }

    button {
      width: 20rem;
      height: 4rem;
      border-radius: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;
