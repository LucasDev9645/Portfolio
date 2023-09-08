import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --color-white :#FFFFFF;
  --color-black :#000000;

  --color-gray-300 :#FCFCFC;
  --color-gray-700 :#2F3034;  
  --color-gray-900 :#212226;
  
  --color-blue-500:#15CDCB;
  --color-red-500:#FE3B3B;
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
    padding:0 1rem;
    overflow-x:hidden;
   
    @media (max-width:560px){
      padding:0 0.5rem;
    }
  }

  h1 , h2 , h3 {
    font-family: 'Poppins', sans-serif; 
  }

  .container {
  max-width: 75rem;
  width: 100%;
  margin: 6rem auto 2rem auto;

  @media (max-width:560px) {
    margin: 3rem auto 2rem auto;
  }
}
`;

export const Title = styled.h1`
  font-family: monospace;
  border-right: 3px solid;
  white-space: nowrap;
  overflow: hidden;
  font-size: 2.75rem;
  color: var(--color-blue-500);
  margin-bottom: 2rem;
  animation: typing 2s steps(10), blinking 0.5s infinite step-end alternate;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blinking {
    50% {
      border-color: transparent;
    }
  }

  @media (max-width: 1200px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 920px) {
    font-size: 2.3rem;
    margin-bottom: 1.3rem;
  }

  @media (max-width: 560px) {
    font-size: 1.9rem;
    margin-bottom: 1.2rem;
  }
`;

export default GlobalStyle;
