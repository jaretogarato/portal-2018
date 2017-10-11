const groups = (state = [], action) => {
  switch (action.type) {
    case 'GET_GROUPS':
      return action.groups;
    case 'ADD_GROUP':
      return [...state, action.group]
    case 'UPDATE_GROUP':
      return state.map(group => {
        if (group.id === action.group.id)
          return action.group
        return group;
      })
    case 'DELETE_GROUP':
      return state.filter(group => group.id !== action.group.id)
    default:
      return state;
  }
}

export default groups;