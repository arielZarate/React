import React, { useEffect } from "react";
//import { connect } from "react-redux";
import { getMovieDetail, cleanDetail } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

import "./Movie.css";

/*
### En el componente Movie

 En nuestros componentes `Favorites.js` y `Buscador.js` veremos que cuando mapeamos nuestro array con peliculas, cada pelicula tiene un `imdbID` usaremos ese ID como parametro, entonces en donde renderizamos el Titulo de la Pelicula, lo envolvemos en un Link y le pasamos como parametro ese ID que recibimos. Algo asi:

```javascript
//Buscador.js

<Link to={`/movie/${movie.imdbID}`}>
  {movie.Title}
</Link>
```

*/

//COMPONENTE FUNCIONAL
function Movie(props) {
  const dispatch = useDispatch(); // mapDispatchToProps
  const movieDetail = useSelector((state) => state.movieDetail); //mapStateToProps

  useEffect(() => {
    //le digo que vaya a buscar el detail de la peli -> didMount
    dispatch(getMovieDetail(props.match.params.id));

    return () => {
      // la función que retorna --> WillUnmount
      dispatch(cleanDetail());
    };
  }, [dispatch, props.match.params.id]); // array -> didUpdate

  return (
    <div className="movie-detail">
      <h1>{movieDetail.Title}</h1>
      <p>{movieDetail.Year}</p>
      <img src={movieDetail.Poster} alt="poster" />
      <p>{movieDetail.Plot}</p>
    </div>
  );
}

export default Movie;
