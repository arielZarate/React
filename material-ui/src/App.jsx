import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Drawer_basico from "./componentes/Dashboard/Drawer_basico";
import Drawer2 from "./componentes/NavBar/Drawer2";
import ShowAlert from "./componentes/Alertas/Alert";
import NavbarBase from "./componentes/NavBar2/NavBarBase";
import NavBar from "./componentes/Drawer/NavBar2";
function App() {
  return (
    <div className="App">
      <h3>Componentes de react</h3>
      {/*     <Botones/>  */}
      {/*<Tipografias/> */}
      {/* <Caja/> */}
      {/*     <CrearTemas/> */}

      {/*   <Grilla/> */}
      {/*     <PracticaCard/> */}
      {/*   <MyCard/> */}
      {/*  <NavBar/>   */}
      {/* <NavListDrawer/>  */}
      {/* <MostrarListDrawer/>  */}

      <NavbarBase />

      {/*   <Header/> */}

      {/*   <BotonesYIconos/>  */}

      {/*    <Dashboard/> */}
      {/*   <Drawer_basico/>  */}
      {/*  <Drawer2 /> */}

      {/*  <ShowAlert/>  */}
    </div>
  );
}

export default App;
