import { MissingMigrantsContextProvider } from "./contexts/missing-migrants-context-provider";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MissingMigrantsContextProvider>
      <App />
    </MissingMigrantsContextProvider>
  </React.StrictMode>
);
