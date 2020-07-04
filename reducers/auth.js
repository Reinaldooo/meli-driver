// import {
//   ACTION,
// } from "../actions"

const initialState = {
  isLogged: false,
  userDetails: null
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    default:
      return state;
  }
};

export default cartReducer;
