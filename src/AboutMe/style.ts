import { styled } from "styled-components";

import { Title } from "../styles/globalStyle";

export const AboutMeStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 23.4rem;

  ${Title} {
    width: 10ch;
  }

  p {
    max-width: 35rem;
    font-size: 1.4rem;
    font-style: italic;
    line-height: 1.5;
  }
`;

export const Box = styled.div`
  position: relative;
  width: 380px;
  height: 420px;
  background-color: var(--color-gray-900);

  border-radius: 30px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 200px;
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
`;

export const FormationStyled = styled.div`
  height: 1.2rem;

  h1 {
    margin-bottom: 1rem;
    font-family: monospace;
    color: var(--color-blue-500);
  }

  img {
    width: 50rem;
  }
`;
