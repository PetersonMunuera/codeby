import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  :root {
    --background: #d1d8e5;
    --shape: #fff;
    --text: #000;
    --grey: #d1d1d1;
    --grey-dark: #a5a5a5;
    --blue: #3b74f2;
    --green: #257a00;
    --green-light: #c7ffa6;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 480px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;