export const RECEIVE_FUNDS = "RECEIVE_FUNDS";

export const receiveFunds = (value) => {
  return {
    type: RECEIVE_FUNDS,
    payload: value
  };
};