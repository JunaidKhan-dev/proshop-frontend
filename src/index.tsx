import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle, { COLORS, TYPOS } from "./globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={{ colors: COLORS, typos: TYPOS }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
