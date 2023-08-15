import * as actionTypes from "./actionTypes";

export const setLoading = (bool: boolean) => {
  return {
    type: actionTypes.LOADING,
    payload: {
      loading: bool,
    },
  };
};
