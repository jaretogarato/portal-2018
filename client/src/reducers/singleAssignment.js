const singleAssignment = (state = [], action) => {
  switch (action.type) {
    case 'SINGLE_ASSIGNMENT':
      return action.singleAssignment;
    case 'UPDATE_SINGLE':
      return action.singleAssignment;
    default:
      return state;
  }
}

export default singleAssignment;