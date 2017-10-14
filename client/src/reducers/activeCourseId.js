const activeCourseId = (state = null, action) => {
  switch(action.type) {
    case 'SET_COURSE':
      // debugger;
      return action.course;
    default:
      return state;
  }
}

export default activeCourseId;
