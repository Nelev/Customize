import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import rootReducer from "./views/Root/reducer";
import createReducer from "./views/Create/reducer";
import { reducer as form } from "redux-form";

export default combineReducers({
    form,
    views: combineReducers({
        routing: routerReducer,
        root: rootReducer,
        create: createReducer
    })
});
