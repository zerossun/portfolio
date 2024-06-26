import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {ThemeProvider} from "styled-components";
import theme from "./scss/theme";
import Footer from "./page/Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
