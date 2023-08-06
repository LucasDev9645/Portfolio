import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  max-width: 90rem;
  margin: 0 auto;
  margin-bottom: 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    gap: 4rem;

    a {
      font-size: 1.5rem;
      color: var(--color-blue-500);
      position: relative;

      &::after {
        content: "";
        width: 0%;
        height: 4px;
        background-color: var(--color-blue-500);
        position: absolute;
        bottom: 0;
        left: 0;
        transition: 0.5s ease-in-out;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
`;
