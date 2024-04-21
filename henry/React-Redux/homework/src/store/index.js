import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

//Recibiendo  el parametro
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//recibe por parametro el rooReducer
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
