import {
    legacy_createStore, applyMiddleware, combineReducers
} from "redux";
import thunk from "redux-thunk"
import {reducer as employeeReducer} from "./employee/reducer"
const rootReducer = combineReducers({
    employeeReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))