import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducer";

const LOG_REDUX_ACTIONS = false;

const middleware = [
    thunk,
    LOG_REDUX_ACTIONS ? createLogger({ collapsed: true }) : null
].filter(m => m !== null);

export default createStore(reducer, applyMiddleware(...middleware));
