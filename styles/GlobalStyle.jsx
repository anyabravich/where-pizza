import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  html,
  body {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
  }
  body {
    font-size: 1rem;
    background: #F9F9F9;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    font-family: 'Inter', sans-serif;
    text-decoration: none;
  }
  button {
    border: none;
    outline: none;
    background: none;
  }
`;
export default GlobalStyle;
