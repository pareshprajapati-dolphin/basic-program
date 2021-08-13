import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducer/authReducer";
import countReducer from "./reducer/countReducer";

const rootReducer = combineReducers({
  authReducer,
  countReducer,
});

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
