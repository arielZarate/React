import {
  // legacy_createStore as
  // la libreria createStore asi sola esta deprecated, usamos lagacy_createStore
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

//thunk es para hacer promesas
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import pokeReducer from "./pokeDuck";

// aca lo combinamos : ES LO UNICO QUE SE MODIFICA
const rootReducer = combineReducers({
  //de  donde vienen nuestros pokemones ?? rta: de reducers -->pokeDuck
  pokemones: pokeReducer,
});

export default function generateStore() {
  // aca creamos el midlleware
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  //retornamos
  return store;
}

//version desactualizada

/* import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import pokesReducer from "./pokesDucks";

const rootReducer = combineReducers({
  pokemones: pokesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
 */
