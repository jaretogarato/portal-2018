const lectures = (state = [], action) => {
  switch (action.type) {
    case 'GET_LECTURES':
      return action.lectures;
    case 'ADD_LECTURE':
      return [action.lecture, ...state]
    default:
      return state;
  }
}

export default lectures;
