import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import GlobalStyle, { COLORS, TYPOS, BREAKPOINTS } from "./globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <ThemeProvider
        theme={{ colors: COLORS, typos: TYPOS, breakpoints: BREAKPOINTS }}
      >
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
