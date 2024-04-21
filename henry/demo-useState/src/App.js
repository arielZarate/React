import { Fragment } from "react";
import "./App.css";
import Contador from "./components/contador";
import Lista from "./components/Lista";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Contador />
        <br></br>
        <Lista />
      </div>
    </Fragment>
  );
}

export default App;
