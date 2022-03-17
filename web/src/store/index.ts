import {applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk"
import {reducer} from "./reducer";

export const store = createStore(reducer as any, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
))
