import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  width: 14rem;
  height: 3.125rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--color-blue-500);

  &:hover {
    box-shadow: 0 0 5px var(--color-blue-500), 0 0 25px var(--color-blue-500);
  }

  @media (max-width: 920px) {
    font-size: 0.9rem;
    width: 12rem;
    height: 3rem;
  }

  @media (max-width: 560px) {
    font-size: 0.9rem;
    width: 10rem;
  }
`;
