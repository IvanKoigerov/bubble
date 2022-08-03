import { createGlobalStyle } from 'styled-components';

export const mainTheme = {
  primary: '#0848c0',
  common: '#9ea4ac',

  userMessage: '#deecfd',
  message: '#f3f5f7',

  textColor: '#000',
  appColor: '#282c34',
  smile: '#467bf1',
  input: '#d6dade',
  scroll: '#d6dade',
  mobileCross: '#3334',

  chatShadow: '0 8px 16px #3333',
  chatColor: '#fff',
  chatW: '400px',
  chatH: '760px',

  bubbleShadow: '0 0 10px #00000014',
  bubbleSize: '60px',
  bubbleOpenMobile: '40px',
  bubbleImgSize: '30px',

  mediaMobile: '410px',
};

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    font-family: inherit;
  }

  img {
    border-style: none;
  }

  button,
  input, 
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    overflow: visible;
  }

  p {
    margin-top: 0;
  }
`;

export default GlobalStyle;
