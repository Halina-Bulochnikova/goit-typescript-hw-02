import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import "modern-normalize/modern-normalize.css";
import { Toaster } from "react-hot-toast";
 

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);