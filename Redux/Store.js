import { combineReducers, createStore } from "redux";
import { CltReducer, ProdReducer,CartReducer } from "./Reducers";

const Root=combineReducers({
   cltReducer: CltReducer,
   prodReducer: ProdReducer,
   cart : CartReducer,

})

export const store = createStore(Root)