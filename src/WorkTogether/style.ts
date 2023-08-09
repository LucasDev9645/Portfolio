import { styled } from "styled-components";

export const WorkTogetherStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
  }

  form {
    padding: 1rem;
    max-width: 30rem;
    height: 30rem;
    color: var(--color-white);

    input {
      border: 1px solid var(--color-blue-500);
      background-color: transparent;
      color: var(--color-white);
      padding: 1rem;
      font-size: 1.125rem;
      border-radius: 0.5rem;
      margin-bottom: 2rem;
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
      height: 15rem;
      padding: 1rem;
      border-radius: 0.5rem;
      font-size: 1.125rem;
      display: block;
      margin-bottom: 2.5rem;
    }
  }
`;
