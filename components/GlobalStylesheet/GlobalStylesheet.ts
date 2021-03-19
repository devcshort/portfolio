import { createGlobalStyle } from 'styled-components';

const GlobalStylesheet = createGlobalStyle`
  html {
    font: 112.5%/1.45em georgia,serif;
  }
  html,body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #222B33;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: #fff;
    font-family: 'Inconsolata', monospace;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  a {
    background-color: transparent;
    color: #D19A66;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
`;

export default GlobalStylesheet;
