import { ADD_USER } from '../actions/invitations';

const users = (state = [], action) => {
  switch(action.type) {
    case ADD_USER:
      return [action.user, ...state];
    default: 
      return state;
  }
}

export default users;