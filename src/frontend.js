import React from "react";
import { createRoot } from "react-dom/client";
import RepLocator from "./components/RepLocator";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("rmc-rep-locator");
  if (container) {
    const root = createRoot(container);
    root.render(<RepLocator />);
  }
});
