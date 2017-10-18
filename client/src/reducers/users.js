import { ADD_USER } from '../actions/invitations';

const users = (state = [], action) => {
  switch(action.type) {
    case ADD_USER:
      return [action.user, ...state];
    case 'GET_COURSE_USERS':
      return action.courseUsers
    default: 
      return state;
  }
}

export default users;