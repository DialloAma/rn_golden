import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CltReducer, ProdReducer,CartReducer,DeliverReducer,UserReducer,SellReducer } from "./Reducers";

const Root=combineReducers({
   cltReducer: CltReducer,
   prodReducer: ProdReducer,
   cart : CartReducer,
   deliv: DeliverReducer,
   sell:SellReducer,
   user:UserReducer,

})

export const store = createStore(Root,applyMiddleware(thunk))