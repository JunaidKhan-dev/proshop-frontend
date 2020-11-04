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
  font-size: 1rem;
  line-height:1.6;
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
}
`;

const COLORS = {
  text: "black",
  background: "white",
  primary: "purple",
};

export { COLORS };
export default GlobalStyle;
