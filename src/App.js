import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import GlobalStyle from "./assets/GlobalStyle";
import Routes from "./routes/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
