const course = ( state = {}, action ) => {
  switch (action.type) {
    case 'SET_ACTIVE_COURSE':
      return action.course;
    case 'CLEAR_ACTIVE_COURSE':
      return {}
    default:
      return state;
  }
}

export default course;
