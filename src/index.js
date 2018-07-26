import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import { IntlProvider } from "react-intl";

import Root from "./views/Root";

import "./index.css";

const App = (
    <IntlProvider locale="en">
        <RouterProvider>
            <Root />
        </RouterProvider>
    </IntlProvider>
);

ReactDOM.render(App, document.getElementById("root"));
