import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";

import Create from "./views/Create";
import Root from "./views/Root";

import "./index.css";

const App = (
    <IntlProvider locale="en">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Root} />
                <Route path="/create" component={Create} />
            </Switch>
        </BrowserRouter>
    </IntlProvider>
);

ReactDOM.render(App, document.getElementById("root"));
