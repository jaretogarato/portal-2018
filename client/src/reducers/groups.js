const groups = (state = [], action) => {
  switch (action.type) {
    case 'GET_GROUPS':
      return action.groups;
    case 'UPDATE_GROUP':
      return action.groups;
    default:
      return state;
  }
}

export default groups;
