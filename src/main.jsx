import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

// Set language before rendering
const path = window.location.pathname;
if (path.startsWith("/ar")) {
  i18n.changeLanguage("ar");
} else {
  i18n.changeLanguage("en");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
