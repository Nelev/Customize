import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Create from "./views/Create";
import Checkout from "./views/Checkout";
import Root from "./views/Root";

import store from "./store";
import "./index.css";

const App = (
    <IntlProvider locale="en">
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Root} />
                    <Route path="/create" component={Create} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </IntlProvider>
);

ReactDOM.render(App, document.getElementById("root"));
