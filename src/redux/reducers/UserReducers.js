import { REGISTER_USER } from '../actionTypes';


const initialState = [
  {
    id:1,
    username:'Insaram',
    password:'69792415',
    email:'alaminsram92@gmail.com'
  },
  {
    id:2,
    username:'alam',
    password:'69792415',
    email:'alam@gmail.com'
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER: {
      newState = state.push({id:Date.now(),...payload})
      console.log(state)
      return state;
    }
    default:
      return state;
  }
};
