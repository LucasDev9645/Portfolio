import { styled } from "styled-components";

import { Title } from "../styles/globalStyle";

export const AboutMeStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Title} {
    width: 10ch;
  }

  p {
    max-width: 35rem;
    font-size: 1.4rem;
    font-style: italic;
    line-height: 1.5;
  }

  @media (max-width: 920px) {
    flex-direction: column-reverse;

    p {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 560px) {
    p {
      font-size: 1.1rem;
    }
  }
`;

export const Box = styled.div`
  position: relative;
  width: 23.75rem;
  height: 26.25rem;
  background-color: var(--color-gray-900);
  border-radius: 1.875rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 12.5rem;
    height: 300%;
    background-color: var(--color-blue-500);

    animation: animate 2s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: var(--color-gray-900);
    inset: 5px;
    border-radius: inherit;
  }

  img {
    position: relative;
    z-index: 1;
    max-width: 90%;
  }

  @keyframes animate {
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 920px) {
    margin-bottom: 1.5rem;
    width: 21.25rem;
    height: 23.75rem;
  }

  @media (max-width: 560px) {
    margin-bottom: 1.3rem;
    width: 20rem;
    height: 22.5rem;
  }
`;

export const FormationStyled = styled.div`
  height: 1.2rem;

  h1 {
    margin-bottom: 1rem;
    color: var(--color-blue-500);
  }

  img {
    width: 50rem;
  }
`;
