import React from "react";
import { useState } from "react";

const Formulario = () => {
  //otra forma
  /*  const [fruta, setFruta] = useState("");
  const [descripcion, setDescripcion] = useState(""); */

  const [datos, setDatos] = useState({ fruta: "", descripcion: "" });

  const handlerDatos = (event) => {
    console.log(event.target.value);

    setDatos({ ...datos, [event.target.name]: event.target.value });
  };

  const guardarDatos = (event) => {
    event.preventDefault();
    console.log(datos.fruta + "" + datos.descripcion);
  };

  //otra forma

  /*   const guardarDatos = (e) => {
    e.preventDefault();

       if (!fruta.trim()) {
      console.log("esta vacio fruta");
      return;
    }

    if (!descripcion.trim()) {
      console.log("esta vacio descripcion");
      return;
    }

    console.log("procesando datos..." + fruta + descripcion);

    e.target.reset();
    setFruta("");
    setDescripcion("");
  }; */

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          name="fruta"
          placeholder="Ingrese Fruta"
          className="form-control mb-2"
          onChange={
            handlerDatos

            //otra forma
            /*  console.log(e.target.value) */
            /*  (e) => setFruta(e.target.value) */
            /* setDatos(e.target.value) */
          }
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Ingrese Descripcion"
          className="form-control mb-2"
          onChange={
            handlerDatos

            //otra forma
            /* (e ) =>setDescripcion(e.target.value) */
          }
        />
        <button className="btn btn-primary btn-block" type="submit">
          Agregar
        </button>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>mostrando por pantalla lo que se ingresa en el input</h4>

      <p>
        {datos.fruta} -- {datos.descripcion}
      </p>
    </div>
  );
};

export default Formulario;
