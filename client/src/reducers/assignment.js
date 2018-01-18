const assignments = (state = [], action) => {
  switch (action.type) {
    case 'GET_ASSIGNMENT':
      return action.assignment;
    case 'GET_ASSIGNMENTS':
      return action.assignments;
    case 'UPDATE_ASSIGNMENT':
      return action.assignment;
    default:
      return state;
  }
}

export default assignments;