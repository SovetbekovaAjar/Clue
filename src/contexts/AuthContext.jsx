import axios from "axios";
import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";

const authContext = createContext();
export function useAuthContext() {
  return useContext(authContext);
}
const initState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.user:
      return { ...state };

    default:
      break;
  }
}

function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();

  async function register(credential) {
    try {
      await axios.post(`${BASE_URL}/users/`, credential);
    } catch (error) {
      console.log(error);
    }
  }

  async function login(credentials) {
    try {
      const { data: tokens } = await axios.post(
        `${BASE_URL}/jwt/create/`,
        credentials
      );
      localStorage.setItem("tokens", JSON.stringify(tokens));
      const { data } = await $axios.get(`${BASE_URL}/users/me/`);
      dispatch({
        type: ACTIONS.user,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    localStorage.removeItem("tokens");
    dispatch({
      type: ACTIONS.user,
      payload: null,
    });
  }

  async function checkAuth() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      if (tokens) {
        const { data } = await $axios.get(`${BASE_URL}/users/me/`);

        dispatch({
          type: ACTIONS.user,
          payload: data,
        });
      } else {
        dispatch({
          type: ACTIONS.user,
          payload: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function activateUser(uid, token) {
    try {
      await axios(`${BASE_URL}/users/activation/`, {
        uid,
        token,
      });
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  }
  const value = {
    user: state.user,
    register,
    login,
    logout,
    checkAuth,
    activateUser,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
