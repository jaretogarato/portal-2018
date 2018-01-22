const courseContent = (state = [], action) => {
  switch (action.type) {
    case 'GET_COURSE_CONTENT':
      return action.courseContent;
    case 'ADD_COURSE_CONTENT':
      return [...state, action.courseContent];
    case 'CLEAR_COURSE_CONTENT':
      return action.courseContent;
    case 'DELETE_COURSE_CONTENT':
      return state.filter( cc => cc.id !== action.cc)
    default:
      return state;
  }
}

export default courseContent;
