import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ListProvider from "./contexts/listContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </StrictMode>,
);
