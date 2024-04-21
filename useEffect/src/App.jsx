import { useState } from "react";
import "./App.css";
import Resize from "./components/Resize";
import Contador from "./components/contador";
function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1 className="bg-dark text-warning rounded-circle ">Use state</h1>

      <Contador />

      <button
        onClick={() => setShow(!show)}
        className="bg-primary text-light fs-1  mt-5"
      >
        mostrar componente
      </button>
      {show && <Resize />}
    </>
  );
}

export default App;
