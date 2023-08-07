import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --color-white :#FFFFFF;
  --color-black :#000000;

  --color-gray-300 :#FCFCFC;
  --color-gray-700 :#2F3034;  
  --color-gray-900 :#212226;
   --color-blue-500:#15CDCB;
}
   
  * {
  margin:0; 
  padding:0;
  box-sizing:border-box;
  font-family: Roboto, sans-serif ;
  list-style:none;
  text-decoration:none;
  }

  body {
    background-color:var( --color-gray-900);
    color:var(--color-gray-300);
  }

  .container {
  max-width: 75rem;
  width: 100%;
  margin: 6rem auto;
}
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  color: var(--color-blue-500);
  margin-bottom: 2rem;
`;
export default GlobalStyle;
