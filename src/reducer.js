import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import createReducer from "./views/Create/reducer";
import rootReducer from "./views/Root/reducer";

export default combineReducers({
    form,
    views: combineReducers({
        routing: routerReducer,
        root: rootReducer,
        create: createReducer
    })
});
