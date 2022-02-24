import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CltReducer, ProdReducer,CartReducer,DeliverReducer } from "./Reducers";

const Root=combineReducers({
   cltReducer: CltReducer,
   prodReducer: ProdReducer,
   cart : CartReducer,
   deliv: DeliverReducer,

})

export const store = createStore(Root,applyMiddleware(thunk))