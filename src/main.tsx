import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import "modern-normalize/modern-normalize.css";
import { Toaster } from "react-hot-toast";
 
const rootElement = document.getElementById("root") as HTMLElement;

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);