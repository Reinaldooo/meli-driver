import {
  RECEIVE_FUNDS,
} from "../actions"

const initialState = {
  balance: 68
};

const balanceReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case RECEIVE_FUNDS:
      return {
        ...state,
        balance: state.balance + payload
      }
    default:
      return state;
  }
};

export default balanceReducer;
