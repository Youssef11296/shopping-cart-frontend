/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  loading: boolean;
  serverDown: boolean;
} = {
  loading: false,
  serverDown: false,
};

const generalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, loading: action.payload.loading, serverDown: false };
    default:
      return { ...state };
  }
};

export default generalReducer;
