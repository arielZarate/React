import { FaShoppingCart } from "react-icons/fa";
import FilterHook from "../hook/FilterHook";
//esta funcion recibe por parametro un array de products y los renderiza
export default function Products() {
  //ahora viene  todo del custom hooks que esta con el contexto global
  const { products, filterProducts } = FilterHook();
  const productsFiltered = filterProducts(products);

  return (
    <main className="min-w-full min-h-screen mx-auto ">
      <ul className="grid grid-cols-3 gap-1 p-2  my-10 mx-10">
        {productsFiltered?.map((p) => (
          <li key={p.id} className="flex flex-col item-center mb-5">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="object-cover h-48 w-52  rounded-md"
            />

            <div className="">
              <strong className="text-sm">{p.title}</strong>

              <span className="ml-3 text-slate-900"> - ${p.price}</span>
            </div>

            <button
              type="button"
              onClick={() => alert("add al cart")}
              className=""
            >
              <FaShoppingCart size={20} />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
