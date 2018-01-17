const assignments = (state = [], action) => {
  switch (action.type) {
    case 'GET_ASSIGNMENT':
      return action.assignment;
    case 'UPDATE_ASSIGNMENT':
      return action.assignment;
    default:
      return state;
  }
}

export default assignments;