import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";

//importo las actions
import {
  getMovies,
  getMovieDetail,
  addMovieFavorite,
} from "../../actions/index";

/* 



### Dispatch una accion desde nuestro componente

Los siguiente que haremos en nuestro componente `Buscador.js` es agragar la accion `getMovies`
 pasandole el valor que guardamos en nuestro estado con el valor title en nuestra funcion `handleSubmit` 
 para tener una referencia del valor ingresado en el input o usando el evento `onChange` 
 en el input y guardando el valor en el state del componente.


*/

export class Buscador extends Component {
  //constructor de clase
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  //metodos de clase
  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  /* 
   es agragar la accion `getMovies`
 pasandole el valor que guardamos en nuestro estado con el valor title en nuestra funcion `handleSubmit` 
 para tener una referencia del valor ingresado en el input o usando el evento `onChange` 
 en el input y guardando el valor en el state del componente.
  */
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  //funcion creada handlerclick

  handleClick(movie) {
    this.props.addMovieFavorite(movie);
  }

  //render
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>

        {/* aca ejecuuta el onSubmit del form */}
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {/* 
          ```javascript
//Recordamos que nuestro button se encuentra dentro del metodo map

<button onClick={() => this.props.addMovie({title: movie.Title, id: movie.imdbID})}>Fav</button>
```

*/}

          {this.props.movies.map((movie) => {
            return (
              <>
                <li>
                  <Link to={`/movies/${movie.imdbID}`}>
                    <span>{movie.Title}</span>
                  </Link>
                  <button
                    onClick={() =>
                      this.handleClick({
                        id: movie.imdbID,
                        Title: movie.title,
                      })
                    }
                  >
                    {" "}
                    ❤
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div> /* fin del div */
    );
  }
}

/* 

Usamos las funciones `mapStateToProps` y `mapDispatchToProps` dentro de nuestros componentes.
 La primera nos permite traer nuestro state global como props a nuestro componente, y 
 la segunda nos permite hacer el `dispatch` de nuestras actions al store. 
 Y para terminar de conectar nuestro componente con el store global usamos una HoC 
 ( High Order Component ) que importamos de la libreria 'react-redux' que se llama `connect`.
*/

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

/* 
Una vez que hacemos el dispatch, ya tenemos nuestro state en nuestro Store, 
en `mapStateToProps` ya traemos el state que updeteamos en nuestro form. 
Ahora tenemos un array de objetos con las peliculas que nos trajo nuestra request a la API.

*/
const mapDispatchToProps = (dispatch) => {
  // despacha las acciones que necesita el componente
  return {
    getMovies: (titulo) => dispatch(getMovies(titulo)),
    movieDetail: (id) => dispatch(getMovieDetail(id)),
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

/* export default Buscador; */
