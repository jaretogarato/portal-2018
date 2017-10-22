const lectures = (state = [], action) => {
  switch (action.type) {
    case 'GET_LECTURES':
      return action.lectures;
    default:
      return state;
  }
}

export default lectures;
