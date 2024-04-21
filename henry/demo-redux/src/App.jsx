import "./App.css";
import Pokemones from "./components/Pokemones";
import { Provider } from "react-redux";
import generateStore from "./Redux/store";

function App() {
  const store = generateStore();
  return (
    //aca mettemos el store
    <Provider store={store}>
      <div className="App">
        <Pokemones />
      </div>
    </Provider>
  );
}

export default App;
