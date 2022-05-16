import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Black.woff2') format('woff2'), url('/fonts/Inter-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-ExtraBold.woff2') format('woff2'), url('/fonts/Inter-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Bold.woff2') format('woff2'), url('/fonts/Inter-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-SemiBold.woff2') format('woff2'), url('/fonts/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.woff2') format('woff2'), url('/fonts/Inter-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* TODO: хз насколько это норм */
  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  html,
  body {
    font-family: 'Inter', sans-serif;
  }
  body {
    font-size: 16px;
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
`
export default GlobalStyle