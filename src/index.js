import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./assets/styles/styles.scss";
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
