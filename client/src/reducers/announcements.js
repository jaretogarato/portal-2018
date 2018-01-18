const announcements = (state = [], action) => {
  switch(action.type) {
    case 'GET_ANNOUNCEMENTS':
      return action.announcements;
    default: 
      return state;
  }
}

export default announcements;