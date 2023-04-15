import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyles from "./styles/Global.styled";
import "./styles/globals.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
