import styled from "styled-components";

import { Props } from "./index";

export const TagContainer = styled.div<Props>`
  background-color: var(--color-blue-500);
  color: var(--color-black);
  font-size: ${(props) => (props.size === "big" ? "1rem" : "0.725rem")};
  font-weight: 700;
  padding: ${(props) =>
    props.size === "big" ? "0.5rem 1rem" : " 0.25rem 0.375rem"};
  border-radius: 0.5rem;
  display: inline-block;
`;
