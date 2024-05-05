import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./Styles/index.scss";
import "./Styles/mediaQueries.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
export const success = new Audio("./assets/success.mp3");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
