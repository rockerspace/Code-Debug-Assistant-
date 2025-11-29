import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(<App />);
fetch("http://localhost:8000/api/debug")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
