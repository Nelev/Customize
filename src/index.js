import React from "react";
import { IntlProvider } from "react-intl";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Create from "./views/Create";
import Root from "./views/Root";
import "./index.css";
import store from "./store";

const App = (
    <IntlProvider locale="en">
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Root} />
                    <Route path="/create" component={Create} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </IntlProvider>
);

ReactDOM.render(App, document.getElementById("root"));
