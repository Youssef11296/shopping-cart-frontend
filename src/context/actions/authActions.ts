/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginUserRequest, RegisterUserRequest, authApi } from "../../api";
import * as actionTypes from "./actionTypes";
import { setLoading } from "./generalActions";

export const registerUser =
  (args: RegisterUserRequest) => async (dispatch: any) => {
    try {
      const response = await authApi.registerUser(args);
      dispatch(setLoading(true));
      dispatch({
        type: actionTypes.REGISTER_USER,
        payload: {
          user: response.data.user,
        },
      });
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch({
        type: actionTypes.AUTH_ERROR,
        payload: {
          message: error.response.data.message,
        },
      });
    }
  };

export const loginUser = (args: LoginUserRequest) => async (dispatch: any) => {
  try {
    const response = await authApi.loginUser(args);
    dispatch(setLoading(true));
    dispatch({
      type: actionTypes.LOGIN_USER,
      payload: {
        message: response.data.message,
        user: response.data.user,
      },
    });
    dispatch(setLoading(false));
  } catch (error: any) {
    console.log({ error });
    dispatch({
      type: actionTypes.AUTH_ERROR,
      payload: {
        message: "AUTH ERROR",
      },
    });
  }
};

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
    payload: {
      message: "Successfully, logged out.",
    },
  };
};
