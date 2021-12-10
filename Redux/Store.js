import { combineReducers, createStore } from "redux";
import { CltReducer, ProdReducer } from "./Reducers";

const Root=combineReducers({
   cltReducer: CltReducer,
   prodReducer: ProdReducer,
})

export const store = createStore(Root)