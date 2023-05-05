import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ScrollUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
