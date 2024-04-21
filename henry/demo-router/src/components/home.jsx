import React from "react";
import { Link, NavLink } from "react-router-dom";

//opcion 2
import "./home.module.css";

import style from "./home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Soy el componente Home</h1>
      <p>cositas</p>
      <p>cositas</p>
      <p>cositas</p>
      <p>cositas</p>
      <p>cositas</p>
      <Link to="/about">About</Link>
      <hr />
      {/* <NavLink exact to="/contact" activeClassName={style.activeClass}> */}
      <NavLink exact to="/contact" activeClassName={style.link}>
        Contact
      </NavLink>
    </div>
  );
}

/* 


*/
