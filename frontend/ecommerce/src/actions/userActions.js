import axios from "axios"

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from "../constants/userConstant"

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const config = { headers: { "Content-Type": "application/json" } }
    const { data } = await axios.post(
      "/api/users/login/",
      { username: email, password: password },
      config
    )
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({ type: USER_LOGOUT })
}

export const signup =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_SIGNUP_REQUEST })
      const config = { headers: { "Content-Type": "application/json" } }
      const { data } = await axios.post(
        "/api/users/register/",
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        },
        config
      )
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data })
      // localStorage.setItem("userInfo", JSON.stringify(data))
      // localStorage.setItem(
      //   "activateMessage",
      //   "Activate your account by clicking on the link sent to your email"
      // )
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
