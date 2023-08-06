import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --color-white :#FFFFFF;
  --color-black :#000000;

  --color-gray-300 :#FCFCFC;
  --color-gray-400 :#EEEEEE;
  --color-gray-500 :#A1A1A1; 
  --color-gray-550 :#8B8B8B;  
  --color-gray-600 :#666666;
  --color-gray-700 :#5E5E5E;  
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
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
}
`;

export default GlobalStyle;
