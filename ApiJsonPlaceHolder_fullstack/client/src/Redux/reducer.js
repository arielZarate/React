import {
  GET_ALL_POSTS,
  CREATE_POSTS,
  DETAIL_POSTS,
  DELETE_POST,
  LOAD_PROPS,
  SEARCH,
} from "./actions_types";

const initialState = {
  posts: [],
  detail: [],

  //este array de props sirve solamente para traer las propiedades del formulario ya que quiero que cuando
  //haga click en update se carge sus correspodientes input los datos
  props: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE_POSTS:
      return {
        ...state,
      };

    case DETAIL_POSTS:
      return {
        ...state,
        detail: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
      };
    case LOAD_PROPS:
      return {
        ...state,
        props: action.payload,
      };

    case SEARCH:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
