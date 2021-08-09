import * as actionType from "./actionType";

export const authstart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authsuccess = (userId) => {
  return {
    type: actionType.AUTH_SUCCESS,
    userId: userId,
  };
};

export const authfail = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    payload: error,
  };
};

export const authlogout = () => {
  return {
    type: actionType.AUTH_LOGOUT,
  };
};

export const signin = (email, password) => {
  console.log("action is call");

  return (dispatch) => {
    dispatch(authstart());
    if (email === "abc@test.com" || password === "12345") {
      dispatch(authsuccess());
    } else dispatch(authfail());
  };
};

export const signOut = () => {
  console.log("logout is call");
  return (dispatch) => {
    dispatch(authstart());
    dispatch(authlogout());
  };
};
