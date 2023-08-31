import { styled } from "styled-components";

export const FooterStyle = styled.footer`
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  img {
    margin: 2rem 2rem 1rem 2rem;
  }

  @media (max-width: 560px) {
    font-size: 1rem;
    margin-bottom: 0.7rem;
    img {
      width: 2.5rem;
      margin: 1rem 1rem 0.7rem 1rem;
    }
  }
`;
