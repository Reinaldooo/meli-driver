import {
  LOGIN,
} from "../actions"

const initialState = {
  isLogged: false,
  userDetails: null
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        userDetails: payload
      }
    default:
      return state;
  }
};

export default cartReducer;
