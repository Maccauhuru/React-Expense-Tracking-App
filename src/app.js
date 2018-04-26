import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

let appRoot = document.getElementById("app-info");
ReactDOM.render(<AppRouter />, appRoot);
