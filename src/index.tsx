import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingProvider } from "./context/LoadingContext";
import { ModalProvider } from "./context/ModalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </ModalProvider>
    <ToastContainer />
  </React.StrictMode>
);
