import axios from "axios";

//acalaracion cada parte de esto deberia estar en un archivo separado
//a modo de simplificar ponemos todo junto

// constantes
const dataInicial = {
  //creamos un array porque la api de pokemon es un array de datos
  array: [],
};

// types   , podria estar en un archivo aparte
let GET_POKE_SUCCESS = "GET_POKE_SUCCESS";

// reducer  :depende de action
/* 
el state le paso un objeto dataInicial , sino tomara array[]

*/
// actions
export const obtenerPokemonsAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    dispatch({
      //posible error aca no s eporque
      type: GET_POKE_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
// actions
/* 

son 2 funciones de flecha , una retorna ala otra 
#obtenerPokemonAction no necesita parametros , pero 
# la otra  funcion recibe 2 parametros : dispatch y un getState
con dipatch vamos a obtener el reducer y con getstate  la data inciial o informacion 


async por que es una llamada a una api
*/

export default function pokesReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_POKE_SUCCESS:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}
