import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import GlobalStyle from "./assets/GlobalStyle";
import Routes from "./routes/routes";
import NavBar from "./components/NavBar";
import { store, persistor } from "./redux/configureStore";

function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Routes />
            <NavBar />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
}

export default App;
