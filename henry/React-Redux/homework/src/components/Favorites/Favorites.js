/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  constructor(props) {
    super(props);
  }

  //FUNCION

  handleClick(id) {
    this.props.removeMovieFavorite(id);
  }

  /* 
  
  ### En el componente Favorites

 Este sera un componente de clase, que llame a `mapStateToProps` y `mapDispatchToProps` como hicimos anteriormente. `mapStateToProps` nos traera simplemente `state.movies` y  `mapDispatchToProps` tendra un dispatch para eliminar peliculas de favoritos, que es el que creamos anteriormente llamado `removeMovieFavorite`. Ya tenemos lo que necesitamos para mostrar nuestras pelis favoritas y nuestro evento para eliminarlas.
  
  
  
  */

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* siepre recorro el objeto  */}
          {this.props.moviesFavorites.map((movie) => {
            return (
              <li>
                <Link to={`/movie/${movie.id}`}>
                  <span>{movie.Title}</span>
                </Link>
                <button onClick={() => this.handleClick(movie.id)}>x</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesFavorites: state.moviesFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

/* export default (ConnectedList);
 */
