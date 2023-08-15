/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import { User } from "../../models/User";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  user: User | null;
} = {
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action?.type) {
    case actionTypes.REGISTER_USER:
      toast.success(action.payload.message);
      return { ...state };
    case actionTypes.LOGIN_USER:
      localStorage.setItem("token", action.payload.user.token);
      toast.success(action.payload.message);
      return { ...state, user: action.payload.user };
    case actionTypes.LOGOUT_USER:
      localStorage.removeItem("token");
      return { ...state, user: null };
    case actionTypes.AUTH_ERROR:
      toast.error(action.payload.message);
      return { ...state };
    default:
      return { ...state };
  }
};

export default authReducer;
