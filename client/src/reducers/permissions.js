const permissions = ( state = {}, action ) => {
  switch(action.type){
    case 'GET_USER_PERMISSIONS':
      return {...action.userRole};
    default:
      return state
  }
}

export default permissions
