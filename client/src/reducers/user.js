const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...action.user };
    case 'LOGOUT':
      return {};
    case 'UPDATE_USER':
      if(state.id === action.user.id) {
        return action.user
      }
    default:
      return state;
  }
};

export default user;
