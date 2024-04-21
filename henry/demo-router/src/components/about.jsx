import React from "react";
import { useParams } from "react-router-dom";

export default function About() {
  console.log(useParams());

  //========COMPONENTE FUNCIONAL==============
  let { id } = useParams();

  return (
    <div>
      <h1>Soy el componente About</h1>
      <h1>Soy el componente About</h1>
      <h1>Soy el componente About</h1>
      <h1>Soy el componente About</h1>
      <h1>Soy el componente About</h1>

      <br />
      <br />
      <br />
      <br />

      <h1>Estoy recibiendo info de la url, el param es: {id}</h1>
    </div>
  );
}

/* 
================COMPONENTE DE CLASES  (demostracion)============================

import React from "react";


export default function About({ match, location, history }) {
  console.log(match);
  console.log(location);
  console.log(history);

  
  //estamos sacando el parametro id de match.params.id
  let id = match.params.id;

  return (
    <div>
      <h1>Soy el componente About</h1>
      <p>Estoy recibiendo info de la url, el param es: {id}</p>
    </div>
  );
}

*/
