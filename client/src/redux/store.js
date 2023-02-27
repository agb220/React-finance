import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tickersReducer from "./reducers/tickersReducer";
import userTickersReducer from "./reducers/userTickersReducer";

const rootReducer = combineReducers({
  tickersReducer: tickersReducer,
  userTickersReducer: userTickersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
