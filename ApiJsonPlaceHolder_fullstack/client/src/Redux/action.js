import {
  GET_ALL_POSTS,
  CREATE_POSTS,
  DETAIL_POSTS,
  DELETE_POST,
  UPDATE_POST,
  LOAD_PROPS,
  SEARCH,
} from "./actions_types";
import axios from "axios";

export function getPosts() {
  return async function (dispatch) {
    try {
      let response = await axios.get("http://localhost:3001/posts");
      return dispatch({
        type: GET_ALL_POSTS,
        payload: response.data.sort(function (a, b) {
          return a.userId - b.userId;
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function searchPosts(title) {
  return async function (dispatch) {
    try {
      console.log(title);
      //http://localhost:3001/posts/?title=laboriosam dolor voluptate
      let response = await axios.get(
        `http://localhost:3001/posts/?title=${title}`
      );
      return dispatch({
        type: SEARCH,
        payload: response.data.sort(function (a, b) {
          return a.userId - b.userId;
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createPosts(body) {
  return async function (dispatch) {
    try {
      let response = await axios.post(`http://localhost:3001/posts`, body);

      return dispatch({
        type: CREATE_POSTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function detailPost(id) {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/posts/` + id);

      return dispatch({
        type: DETAIL_POSTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deletePost(id) {
  return async function (dispatch) {
    try {
      //http://localhost:3001/posts/7b710d97-7407-438e-b083-48d0026125ef
      await axios.get(`http://localhost:3001/posts/` + id);
      return dispatch({
        type: DELETE_POST,
        /* NO DEBO PASAR NADA EN EL PAYLOAD  */
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//esta funcion sirve pàra pasar los parametros o props al form de update cuando se hace click
export function loadProps(title, body, userId) {
  return async function (dispatch) {
    try {
      /* estas son props */

      return dispatch({
        type: LOAD_PROPS,
        payload: { title, body, userId },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updatePosts(body, id) {
  return async function (dispatch) {
    try {
      //http://localhost:3001/posts/e3950add-488e-4b70-9c78-be2f2dcafd0a (EJEMPLO)
      let response = await axios.put(`http://localhost:3001/posts/${id}`, body);
      return dispatch({
        type: UPDATE_POST,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
