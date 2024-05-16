import "./App.css";
import { products as initialProducts } from "./mocks/products.json";
import Products from "./components/Products";
import { useState } from "react";
import Filter from "./components/Filter";
import FilterHook from "./hook/FilterHook"; // 3ra opcion

//===========================================================

//===========================================================

function App() {
  //const [products] = useState(initialProducts);
  /**
   opcion 1 con el filtro en el app
 *  const [filter, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });
 */

  //===========================================================
  //const { filter, setFilter, filterProducts } = useContext(FilterContext); //2da opcion

  //const { filter, setFilter, filterProducts } = AuthFilter(); //2da opcion sin el customHook usas directamnete la funcion desde el contexto todo

  //const { filter, setFilter, filterProducts } = FilterHook(); //3ra opcion
  //================================

  //funcion para filtrar
  //la lleve al contexto del filter: 1 y 2 opcion
  /**
 const filterProducts = (products) => {
    let filtered = products.filter((p) => {
      return (
        p.price >= filter.minPrice &&
        (filter.category === "all" || p.category === filter.category)
      );
    });

    return filtered;
  };
 */

  //3ra opcion
  //const filteredProducts = filterProducts(products);

  return (
    <>
      <div className="mx-auto min-h-screen max-w-full mt-0 p-0">
        <h1 className="text-3xl font-bold text-center p-3 m-2 bg-slate-800 text-green-500 rounded-lg">
          E-ccomerce React 🛒
        </h1>

        {/**
           he logrado desmenuzar el codigo , sacar la logica y dejarla separada en un custom hook ,
           estoy usando un contexto global pero aun me sigue quedando el Filter y el Products con prop Driling
            entonces usare el contexto global.

        <Filter changeFilter={{ filter, setFilter }} />
        <Products products={filteredProducts} />

            
           */}

        <Filter />
        <Products />
      </div>
    </>
  );
}

export default App;
