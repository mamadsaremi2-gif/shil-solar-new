import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import { AppProvider } from "./app/providers/AppProvider";
import { App } from "./app/App";
import "./styles/globals.css";

registerSW({
  immediate: true,
  onNeedRefresh() {
    window.dispatchEvent(new CustomEvent("shil-pwa-update-ready"));
  },
  onOfflineReady() {
    window.dispatchEvent(new CustomEvent("shil-pwa-offline-ready"));
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
