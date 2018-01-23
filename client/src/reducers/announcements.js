const announcements = (state = [], action) => {
  switch(action.type) {
    case 'GET_ANNOUNCEMENTS':
      return action.announcements;
    case 'ADD_ANNOUNCEMENT':
      return [action.announcement, ...state];
    case 'DELETE_ANNOUNCEMENT':
      return state.filter( a => a.id !== action.id && a );
    default: 
      return state;
  }
}

export default announcements;