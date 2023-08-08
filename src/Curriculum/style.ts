import { styled } from "styled-components";

export const StylesCurriculumContainer = styled.div`
  h1 {
    text-align: center;
  }
`;

export const StylesCurriculum = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.125rem;
    font-style: italic;
    margin-bottom: 1.3rem;
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
`;
