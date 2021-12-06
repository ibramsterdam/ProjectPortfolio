import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props: any) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props: any) => props.theme.colors.background1};
    color: ${(props: any) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props: any) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
    color: white;
  }
  li{
    list-style: none;
  }
  

`;

export default GlobalStyles;