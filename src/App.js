import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import GlobalStyle from "./assets/GlobalStyle";
import Routes from "./routes/routes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes />
        <NavBar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
