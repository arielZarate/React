import { useState } from "react";

export default function Contador() {
  //decalaramos variables y funciones
  const [numero, setNumero] = useState(0);

  const sumar = () => setNumero(numero + 1);

  const restar = () => {
    setNumero(numero - 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      <br />
      <input type="button" value={"Restar"} onClick={restar} />
      <h3>Estado: {numero}</h3>
      <input type="button" value={"Sumar"} onClick={sumar} />
    </div>
  );
}
