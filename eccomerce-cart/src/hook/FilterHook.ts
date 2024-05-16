//==========================================
// custom hook
//==========================================

import { AuthFilter } from "../Context/FilterContext";

export default function FilterHook() {
  const { filter, setFilter, products } = AuthFilter();

  //filtrado por catergory y price

  const filterProducts = (products) => {
    const filtered = products.filter((p) => {
      return (
        p.price >= filter.minPrice &&
        (filter.category === "all" || p.category === filter.category)
      );
    });

    return filtered;
  };

  return { filter, setFilter, filterProducts, products };
}

//esta funcion me permite solo destructurar el contexto y poder usar donde sea
