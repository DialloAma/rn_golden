import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { CltReducer, ProdReducer,CartReducer,DeliverReducer } from "./Reducers";

const Root=combineReducers({
   cltReducer: CltReducer,
   prodReducer: ProdReducer,
   cart : CartReducer,
   deliv: DeliverReducer,

})

export const store = createStore(Root,compose(applyMiddleware(thunk)))