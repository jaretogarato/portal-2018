const announcements = (state = [], action) => {
  switch(action.type) {
    case 'GET_ANNOUNCEMENTS':
      return action.announcements;
    case 'ADD_ANNOUNCEMENT':
      return [action.announcement, ...state]
    default: 
      return state;
  }
}

export default announcements;