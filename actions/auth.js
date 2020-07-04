export const LOGIN = "LOGIN";

export const logUserIn = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};