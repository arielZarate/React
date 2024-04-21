import {
  GET_MOVIES,
  MOVIE_DETAIL,
  REMOVE_MOVIE_FAVORITE,
  ADD_MOVIE_FAVORITE,
  CLEAN_DETAIL,
} from "./action-types";

const APIKEY = "4c848c2c";

//get movies recibe un titulo
export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${titulo}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

//recibe movie por id , lo mismo que el anterio pero solo con el id en vez de Title
export const getMovieDetail = (id) => {
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`)
      .then((response) => response.json())
      .then((obj) => dispatch({ type: MOVIE_DETAIL, payload: obj }));
  };
};

//ACA SOLO AGREGA
export const addMovieFavorite = (movie) => {
  return { type: ADD_MOVIE_FAVORITE, payload: movie };
};

//ACA SOLO REMUEVE PASA EL ID
export const removeMovieFavorite = (id) => {
  return { type: REMOVE_MOVIE_FAVORITE, payload: id };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
