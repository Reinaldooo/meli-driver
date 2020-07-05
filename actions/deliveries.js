export const FINISH_DELIVERY = "FINISH_DELIVERY";

export const finishDelivery = (id) => {
  return {
    type: FINISH_DELIVERY,
    payload: id
  };
};