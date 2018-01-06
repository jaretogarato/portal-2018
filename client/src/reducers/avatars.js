const avatars = ( state = [], action ) => {
  switch ( action.type ) {
    case 'ADD_AVATAR':
      return [...state, action.avatar]
    default:
      return state;
  }
}

export default avatars;
