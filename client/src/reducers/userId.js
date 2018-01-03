
const userId = ( state = {}, action ) => {
  switch(action.type) {
    case 'GET_USER_BY_ID':
      return action.userId;
    default:
      return state;
  }
}

export default userId
