const courses = (state = [], action) => {
  switch (action.type) {
    case 'GET_COURSES':
      return action.courses;
    case 'ADD_COURSE':
      return [...state, action.course]
    case 'UPDATE_COURSE':
      return state.map(course => {
        if (course.id === action.course.id)
          return action.course
        return course;
      })
    case 'DELETE_COURSE':
      return state.filter(course => course.id !== action.course.id)
    default:
      return state;
  }
}

export default courses;
