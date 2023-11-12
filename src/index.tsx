import React from "react";
import { createRoot } from 'react-dom/client';
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import "./services/firebase";
import "./index.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
