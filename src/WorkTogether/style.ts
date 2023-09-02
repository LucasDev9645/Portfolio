import { styled } from "styled-components";

import { Title } from "../styles/globalStyle";

export const WorkTogetherStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Title} {
    width: 17ch;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-style: italic;
      font-weight: 500;
      max-width: 600px;
    }

    form {
      padding: 1rem;
      max-width: 30rem;
      height: 25rem;
      color: var(--color-white);

      input {
        border: 1px solid var(--color-blue-500);
        background-color: transparent;
        color: var(--color-white);
        padding: 1rem;
        font-size: 1.125rem;
        border-radius: 0.5rem;
        margin-top: 2rem;
        width: 28rem;
        height: 3rem;
        display: block;
      }

      textarea {
        resize: none;
        border: 1px solid var(--color-blue-500);
        background-color: transparent;
        color: var(--color-white);
        width: 28rem;
        height: 13rem;
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 1.125rem;
        display: block;
        margin: 2rem 0 1.5rem 0;
      }
    }

    .styleError {
      font-size: 0.9rem;
      margin: 0s;
      color: var(--color-red-500);
      margin: 0.3rem 0 0 0.2rem;
    }

    @media (max-width: 560px) {
      form {
        input {
          padding: 0.8rem;
          font-size: 1rem;
          margin-top: 1.5rem;
          width: 20rem;
          height: 2.5rem;
        }

        textarea {
          width: 20rem;
          padding: 0.8rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

export const MyContact = styled.div`
  margin-top: 8.5rem;

  a {
    padding: 0 2rem;
    &:hover {
      zoom: 1.3;
    }
  }

  @media (max-width: 560px) {
    margin-top: 7rem;

    a {
      padding: 0 1rem;
    }

    img {
      width: 2.5rem;
    }
  }
`;
