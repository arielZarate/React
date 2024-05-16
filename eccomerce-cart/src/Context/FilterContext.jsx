import { createContext, useState, useContext } from "react";
import { products as initialProducts } from "../mocks/products.json";
const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  const [products] = useState(initialProducts);

  /*
  
    const filterProducts = (products) => {
    const filtered = products.filter((p) => {
      return (
        p.price >= filter.minPrice &&
        (filter.category === "all" || p.category === filter.category)
      );
    });

    return filtered;
  };
   */
  return (
    <FilterContext.Provider
      value={{
        // category: "all",
        //minPrice: 0,
        filter,
        setFilter,
        products,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const AuthFilter = () => useContext(FilterContext);
