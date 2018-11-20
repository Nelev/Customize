import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import rootReducer from "./views/Root/reducer";

export default combineReducers({
    views: combineReducers({ routing: routerReducer, root: rootReducer })
});
