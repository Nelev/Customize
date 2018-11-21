import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import rootReducer from "./views/Root/reducer";
import createReducer from "./views/Create/reducer";

export default combineReducers({
    views: combineReducers({
        routing: routerReducer,
        root: rootReducer,
        create: createReducer
    })
});
