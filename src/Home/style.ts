import { styled } from "styled-components";

export const StyledHome = styled.section`
  margin: 12.5rem 0;
  h2 {
    margin-bottom: 1rem;
    color: var(--color-white);
  }
`;

export const TitleHome = styled.h1`
  font-family: monospace;
  border-right: 3px solid;
  width: 19ch;
  white-space: nowrap;
  overflow: hidden;
  font-size: 2.75rem;
  color: var(--color-blue-500);
  margin-bottom: 2rem;
  animation: typing 2s steps(10), blinking 0.5s infinite step-end alternate;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blinking {
    50% {
      border-color: transparent;
    }
  }
`;

export const DescriptionHome = styled.p`
  max-width: 40rem;
  font-size: 1.3rem;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 2rem;
`;
