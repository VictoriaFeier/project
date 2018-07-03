import {createStore,applyMiddleware} from "redux";
import ReduxLogger from "redux-logger";
import ReduxThunk from "redux-thunk";
import ReduxPromise from "redux-promise";
import reducer from "./reducer";

let store = createStore(reducer,applyMiddleware(ReduxLogger,ReduxThunk,ReduxPromise));

export default store;
