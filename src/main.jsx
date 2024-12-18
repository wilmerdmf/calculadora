import { createRoot } from "react-dom/client";
import { MainContextProvider } from "./context/MainContextProvider.jsx";
import "./main.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <MainContextProvider>
    <App />
  </MainContextProvider>
);
