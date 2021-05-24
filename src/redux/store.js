import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "./reducers/bookReducer";

const combinedReducer = combineReducers({ books: bookReducer });

const store = createStore(combinedReducer, composeWithDevTools());

export default store;
