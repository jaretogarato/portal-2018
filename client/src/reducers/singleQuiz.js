const singleQuiz = (state = {}, action) => {
  switch (action.type) {
    case 'GET_QUIZ':
    case 'UPDATE_QUIZ':
      return action.quiz
    default:
      return state
  }
}

export default singleQuiz
