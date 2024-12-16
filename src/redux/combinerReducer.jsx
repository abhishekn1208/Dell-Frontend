import { combineReducers } from "redux";
import { DropDownReducer } from "./reducer";

export const rootReducer = combineReducers({
    dropdown : DropDownReducer
})