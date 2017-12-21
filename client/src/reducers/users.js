import { ADD_USER } from '../actions/invitations';

const users = (state = [], action) => {
  switch(action.type) {
    case ADD_USER:
      return [action.user, ...state];
    case 'GET_COURSE_USERS':
      return action.courseUsers
    case 'UPDATE_USER_STATUS':
      return state.map( u => {
        if(u.id === action.newStatus.id)
          return { ...u, ...action.newStatus }
        return u
      })
    case 'MARK_ALL_PRESENT':
      return state.map ( u => {
        return { ...u, status: action.status }
      })
    default:
      return state;
  }
}

export default users;
