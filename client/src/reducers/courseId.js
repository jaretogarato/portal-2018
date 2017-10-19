const courseId = (state = null, action) => {
  switch(action.type) {
    case 'SET_COURSE':
      return action.course;
    default:
      return state;
  }
}

export default courseId;
