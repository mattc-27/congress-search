import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import '../style.css';

import MainApp from "./App";



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* "Mount" this app under the /inbox URL pathname. All routes and links
        are relative to this name. */}
        <BrowserRouter basename="search">
            <MainApp />
        </BrowserRouter>
    </React.StrictMode>
);