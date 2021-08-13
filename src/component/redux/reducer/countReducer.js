import { connect } from "react-redux";
import * as actionType from "../actions/actionType";

const instialState = {
  count: 0,
  conut1: 0,
  user: [],
};

const countReducer = (state = instialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        // Copy the whole state
        ...state,
        count: action.total1,
        user: action.arraydata,
      };

    case actionType.DECREMENT:
      return {
        ...state,
        count: action.payload,
      };

    case actionType.RESETDATA:
      return {
        ...state,
        count: action.payload,
      };

    case actionType.ADD:
      return {
        ...state,
        conut1: action.payload,
      };

    case actionType.SUB:
      return {
        ...state,
        conut1: action.payload,
      };

    case actionType.ZERO:
      return {
        ...state,
        conut1: action.payload,
      };

    default:
      return state;
  }
};

export default countReducer;
