import { thunk } from "redux-thunk";
import  {applyMiddleware , createStore} from "redux"
import { reducer } from "./Reducer";

export const Store = createStore(reducer, applyMiddleware(thunk));