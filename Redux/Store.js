import { combineReducers, createStore } from "redux";
import { CltReducer } from "./Reducers";

const Root=combineReducers({
   cltReducer: CltReducer
})

export const store = createStore(Root)