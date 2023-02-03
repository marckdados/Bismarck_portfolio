import React from "react";
import Home from "./pages/Home/HomeContainer";
import GlobalStyle from "./assets/styles/globalStyles";
import { ThemeProvider } from "react-hook-theme";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider
        options={{
          theme: "dark",
          save: true,
        }}
      >
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
