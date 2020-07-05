import {
  FINISH_DELIVERY,
} from "../actions"

const initialState = {
  finishedDeliveries: []
};

const deliveriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //
  switch (type) {
    case FINISH_DELIVERY:
      return {
        ...state,
        finishedDeliveries: state.finishedDeliveries.concat(payload)
      }
    default:
      return state;
  }
};

export default deliveriesReducer;
