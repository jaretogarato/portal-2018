const course_users = (state = [], action) => {
  switch(action.type) {
    case 'GET_COURSE_USERS':
      return action.course_users
    default: 
      return state;
  }
}

export default course_users;