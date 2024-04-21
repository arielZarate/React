import { GET_USERS, CREATE_USER, DELETE_USER } from "./actions_types";

//inicializo
const initialState = {
  users: [],
  my_users: [],
};

//el rootReducer recibe 2 estados

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        //concatena los dos estados/ elementos
        my_users: [...state.my_users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        my_users: state.my_users.filter((user) => user.id !== action.payload),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
