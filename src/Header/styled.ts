import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  max-width: 90rem;
  margin: 0 auto;
  margin-top: 4rem;
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
        height: 0.25rem;
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

  .mobileMenu {
    cursor: pointer;

    .hidden {
      display: none;

      .line {
        width: 2rem;
        height: 0.125rem;
        border-radius: 0.5rem;
        background: var(--color-blue-500);
        margin: 0.5rem;
      }
    }
    .active {
      transform: translateX(0);
      z-index: 2;

      li {
        opacity: 1;
      }
    }
  }

  @media (max-width: 1200px) {
    margin-top: 3rem;

    img {
      width: 8.75rem;
    }

    ul {
      gap: 3rem;

      a {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 920px) {
    img {
      width: 7.5rem;
    }

    .mobileMenu {
      .hidden {
        display: block;
      }
    }

    nav {
      position: absolute;
      top: 11vh;
      right: 0;
      width: 100vw;
      height: 89vh;
      background: var(--color-gray-900);
      opacity: 0.97;
      transform: translateX(100%);
      transition: transform 0.3s ease-in;

      ul {
        flex-direction: column;
        align-items: center;

        li {
          opacity: 0;
          margin-bottom: 2rem;

          a {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @media (max-width: 560px) {
    margin-top: 1rem;

    img {
      display: block;
      text-align: center;
    }

    ul {
      margin-top: 1rem;
      gap: 1rem;

      a {
        font-size: 1rem;
      }
    }
  }
`;
