//import React, { useState } from "react";
import FilterHook from "../hook/FilterHook";
export default function Filter() {
  //OJO CON CREAR 2 FUENTES DE LA VERDAD ESTA MAL
  // const [category, setCategory] = useState("all");
  //const [minPrice, setMinPrice] = useState(0);

  //const { filter, setFilter } = changeFilter; 3era opcion que ingresa por parametros

  const { filter, setFilter } = FilterHook();

  /**=======ESTA MAL======
   * 
   
     function handleChange(event) {
    const { value } = event.target;
    setMinPrice(value);
    changeFilter((prevState) => ({
      ...prevState,
      minPrice: value,
    }));
  }


  **
 
   function handleSelect(event) {
    const { value } = event.target;
    setCategory(value);
    changeFilter((prevState) => ({
      ...prevState,
      category: value,
    }));
  }
   */

  function handleChange(event) {
    const { name, value } = event.target;

    // console.log(name, value);
    /**
     setFilter({
      [name]: value,
    });
    */

    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  }

  function handleSelect(event) {
    setFilter((prevFilter) => ({
      ...prevFilter,
      category: event.target.value,
    }));
  }

  return (
    <div className="mx-auto max-w-[700px] ">
      <div className="bg-slate-700 text-slate-100  flex justify-between items-center h-32 p-2 ">
        <div className="">
          <label htmlFor="price">Precio</label>
          <input
            type="range"
            id="price"
            min={0}
            max={1500}
            name="minPrice"
            className="ml-2  w-32 bg-gray-200 rounded-lg"
            onChange={handleChange}
          />

          <span className="m-2">${filter.minPrice}</span>
        </div>

        <div>
          <label htmlFor="category">Categoria</label>
          <option>elija una opcion</option>
          <select
            id="category"
            onChange={handleSelect}
            className="mx-2 py-2 rounded-lg text-black w-48"
            value={filter.category} // Agrego el valor del select controlado
          >
            <option value="all">todo</option>
            <option value="laptops">notebooks</option>
            <option value="smartphones">Telefonos</option>
          </select>
        </div>
      </div>
    </div>
  );
}
