/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "../../models/User";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  user: User | null;
} = {
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return { ...state, user: action.payload.user };
    default:
      return { ...state };
  }
};

export default authReducer;
