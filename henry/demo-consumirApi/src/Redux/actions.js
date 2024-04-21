import { GET_USERS, CREATE_USER, DELETE_USER } from "./actions_types";
//GET USERS

export const createUser = (body) => {
  return { type: CREATE_USER, payload: body };
};

export const deleteUser = (id) => {
  return { type: DELETE_USER, payload: id };
};

export const getUsers = () => {
  //recibe un dispatch()
  return async function (dispatch) {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      //.then((r) => console.log(r))

      //este dispatch se va al reducer
      .then((r) => dispatch({ type: GET_USERS, payload: r }));
  };
};
