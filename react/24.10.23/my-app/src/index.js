import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import { App, App2 } from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<App />);
root.render(<App2 />);