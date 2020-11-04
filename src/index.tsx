import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle, { COLORS } from "./globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={{ colors: COLORS }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
