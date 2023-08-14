import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(compose(thunk)))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
