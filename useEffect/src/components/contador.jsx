import { useEffect, useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect - El valor de count ha cambiado:", count);
  }, [count]);

  return (
    <>
      <div className="text-primary">contador</div>

      <div className="d-flex justify-content-start align-item-center mt-5">
        <h3>
          El contador: <span className="text-danger">{count}</span>
        </h3>

        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
          className="bg-primary text-light fs-3 mr-3"
        >
          incrementar+
        </button>

        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
          }}
          className="bg-success text-light fs-3 mr-3"
        >
          decrementar -
        </button>
      </div>
    </>
  );
}

export default Contador;
