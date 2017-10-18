const userCourses = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_COURSES':
      return action.userCourses;
    default:
      return state;
  }
}

export default userCourses;
