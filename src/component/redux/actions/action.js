import { toast } from "react-toastify";
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

/// this the counter reducer action function  ///
//// this the incremet the of data in ///
export const incrementdata = (total, array1) => {
  return {
    type: actionType.INCREMENT,
    total1: total,
    arraydata: array1,
  };
};

export const decrementdata = (total) => {
  return {
    type: actionType.DECREMENT,
    payload: total,
  };
};

export const resetdata = (total) => {
  return {
    type: actionType.RESETDATA,
    payload: total,
  };
};

//// the conter upadte the second data
export const increment = (countdata2) => {
  return {
    type: actionType.ADD,
    payload: countdata2,
  };
};

export const decrement = (countdata2) => {
  return {
    type: actionType.SUB,
    payload: countdata2,
  };
};

export const zero = (countdata2) => {
  return {
    type: actionType.ZERO,
    payload: (countdata2 = 0),
  };
};

export const signin = (email, password) => {
  console.log("action is call");
  return (dispatch) => {
    dispatch(authstart());
    if (email === "abc@test.com" && password === "12345") {
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
