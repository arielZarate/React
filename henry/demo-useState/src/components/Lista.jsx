import { useState } from "react";

const Lista = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  //funcvion

  const [numero, SetNumero] = useState(5);

  const add = () => {
    SetNumero(numero + 1);
    setArray([...array, numero]);
  };

  return (
    <div>
      <h1>Lista con map</h1>

      <div>
        {/* <input key="n" type="text" placeholder="agregar elementos" /> */}
        <button key="n" onClick={add}>
          Agregar Elementos
        </button>
      </div>
      {array.map((numero, index) => (
        <p key={index}>
          {index} -{numero}
        </p>
      ))}
    </div>
  );
};

export default Lista;
