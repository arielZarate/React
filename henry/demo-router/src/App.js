import "./App.css";

//importamos componentes

import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";

//router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/contact" component={Contact} />

      {/* 
     
      =====COMPONENTES DE CLASES ===============

      <Route
        exact
        path="/about/:id"
        render={({ match, location, history }) => (
          <About match={match} location={location} history={history} />
        )}
      /> */}

      {/* COMPONENTE DE FUNCIONES , SE MANEJA DESDE EL useParams()- useHistory() - useLocation() */}
      <Route exact path="/about/:id" component={About} />

      {/* <Route exact path='/contact/otro' >
        <OtroComponente/>
      </Route> */}
    </div>
  );
}

export default App;

//codigo deprueba 🤣

/* 

//esto no ANDABA 
       <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route
          exact
          path="/contact"
          render={(math, location, history) => (
            <Contact math={math} location={location} history={history} />
          )}
        >
          <Contact />
        </Route>


*/

/* 


NUEVA FORMA CON REACT-ROUTER-DOM 6.4.2


<Routes>
          <Route path="/" element={<Home />} />

          <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          <Route path="about" render={(props) => <About   props={props}></About>} />
          <Route path="*" element={<NoPage />} /> 
        </Routes>


*/
