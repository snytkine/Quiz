import { combineReducers } from "redux";
import counterReducer from "./reducers/counter";

const routeReducer = combineReducers({
    counter: counterReducer
})

export default routeReducer;