import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import createReducer from "./views/Create/reducer";
import rootReducer from "./views/Root/reducer";
import workContainerReducer from "./components/WorkContainer/reducer";

export default combineReducers({
    form,
    components: combineReducers({
        workContainer: workContainerReducer
    }),
    views: combineReducers({
        routing: routerReducer,
        root: rootReducer,
        create: createReducer
    })
});
