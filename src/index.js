import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Body from "./body";
import App from "./App";
import Temperature from "./temperature";
import Form from "./form";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Body />
    <Temperature />
    <Form />
  </StrictMode>
);