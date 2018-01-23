const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...action.user };
    case 'LOGOUT':
      return {};
    case 'UPDATE_USER':
    debugger
      if(state.id === action.user.id)
        return action.user;
      return state;
    default:
      return state;
  }
};

export default user;
