import { combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import authReducer from "./reducers/auth"

const routeReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
})

export default routeReducer;