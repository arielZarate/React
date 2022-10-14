import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import generateStore from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  /* agregamos el provider de react-redux 
  y el store
  */

  <Provider store={generateStore()}>
    {/*    agregamso el Browser Router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

/* 
 <React.StrictMode>
  </React.StrictMode>

*/
