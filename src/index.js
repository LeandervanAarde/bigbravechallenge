import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CharacterProvider } from "./store/Character.Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </BrowserRouter>
);
