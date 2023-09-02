import { styled } from "styled-components";

export const TagSkillsStyle = styled.div`
  display: inline-block;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 2px solid var(--color-blue-500);
  font-weight: 700;
  font-size: 1rem;
  text-transform: capitalize;
  margin: 0.7rem 0.5rem;

  &:hover {
    background-color: var(--color-blue-500);
    color: var(--color-black);
    box-shadow: 0 0 5px var(--color-blue-500), 0 0 25px var(--color-blue-500);
  }
`;
