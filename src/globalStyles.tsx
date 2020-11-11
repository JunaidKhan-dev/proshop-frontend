// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Nunito';
  src:  url('./assets/fonts/Nunito-Regular.ttf.ttf') format('tff'),
  url('./assets/fonts/Nunito-Italic.ttf') format('tff'),
  url('./assets/fonts/Nunito-Bold.ttf') format('tff');
}

* {
  box-sizing:border-box;
}

html {
  font-size: 10px;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', Sans-Serif;
  font-size: 1.6rem;
  line-height:1.6;
  color: #3f3e3f;
}

img {
  width:100%;
  display:block;
}
a{
  display:inline-block;
}

h1, h2, h3, h4,h5,h6,p, li, ul{
  margin: 0;
  color: #3f3e3f;
}

main {
  min-height: calc(100vh - 16rem);
}
.container {
width:90%;
max-width:1280px; 
margin:0 auto;
}

`;

interface COLOR {
  orange: string;
  dark: string;
  blue: string;
  yellow: string;
  light: string;
}

const COLORS: COLOR = {
  orange: "#BB4430",
  dark: "#231F20",
  blue: "#7EBDC2",
  yellow: "#F3DFA2",
  light: "#EFE6DD",
};

const TYPOS: any = {
  sizes: {
    XXL: "5rem",
    XL: "4rem",
    LG: "3rem",
    MD: "2rem",
    S: "1rem",
    XS: "0.5rem",
  },
};

const BREAKPOINTS: any = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export { COLORS, TYPOS, BREAKPOINTS };
export default GlobalStyle;
