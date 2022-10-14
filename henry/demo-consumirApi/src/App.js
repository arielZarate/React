import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

import About from "./Components/About";
import Users from "./Components/Users";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Nav} />

      <Route exact path="/" component={Home} />

      <Route exact path="/about" render={() => <About />} />

      <Route exact path="/users" render={() => <Users />} />
    </div>
  );
}

export default App;
