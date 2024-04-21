import { useState, useEffect } from "react";

function Resize() {
  const [windoWidth, setWindoWidth] = useState(window.innerWidth);
  const isMobile = windoWidth < 576;
  const isTablet = windoWidth >= 576 && windoWidth <= 768;
  const isDesktop = windoWidth > 768 && windoWidth <= 1024;
  const isFullDesktop = windoWidth > 1024;

  ///==================================================

  //============================
  useEffect(() => {
    console.log("Este efecto se ejecuta solo una vez al montar el componente");
  }, []);

  useEffect(() => {
    console.log("useEffect sin el array de dependencies ");
  });

  useEffect(() => {
    let handleResize = () => {
      setWindoWidth(window.innerWidth);

      console.log("reize se actualizo");
    };

    ///ahora agrego el evento y le paso la funcion
    window.addEventListener("resize", handleResize, () => {
      console.log("resize-cambio");
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("se desmonto resize");
    };
  }, []);

  return (
    <>
      <div className="mt-5 text-secondary fs-1">Resize pantalla</div>

      <h1 className="fs-2 m-3 text-success"> {isMobile && windoWidth}</h1>
      {isMobile && <h2>Show solo en dispositivos mobiles</h2>}

      <br />

      <h1 className="fs-2 m-3 text-success"> {isTablet && windoWidth}</h1>
      {isTablet && <h2>Show solo en dispositivos Tablets</h2>}

      <br />

      <h1 className="fs-2 m-3 text-success"> {isDesktop && windoWidth}</h1>
      {isDesktop && <h2>Show solo en Escritorio</h2>}

      <br />

      <h1 className="fs-2 m-3 text-success"> {isFullDesktop && windoWidth}</h1>
      {isFullDesktop && <h2>Show solo en Pantallas muy grandes</h2>}

      <br />
    </>
  );
}

export default Resize;
