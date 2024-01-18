import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApplicationProvider } from "./contexts/useApp";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApplicationProvider>
        <Toaster />
        <App />
      </ApplicationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
