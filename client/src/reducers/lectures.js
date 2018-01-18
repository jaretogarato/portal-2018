const lectures = (state = [], action) => {
  switch (action.type) {
    case 'GET_LECTURES':
      return action.lectures;
    case 'CLEAR_LECTURES':
      return action.lectures
    case 'ADD_LECTURE':
      return [ action.lecture, ...state ];
    case 'DELETE_LECTURE':
      return {...state, lectures: action.lectures };
    case 'GET_LECTURE':
      return action.lecture;
    case 'EDIT_LECTURE':
      if(state.id === action.lecture.id)
        return action.lecture;
    return state;
    default:
      return state;
  }
}

export default lectures;
