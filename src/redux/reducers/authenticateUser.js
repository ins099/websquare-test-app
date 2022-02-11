import { LOGIN_USER } from "../actionTypes";

const initialState = {
  id: 1,
  username: "Insaram",
  email: "alaminsram92@gmail.com",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER: {
      state = payload;
      return state;
    }
    default:
      return state;
  }
};
