const singleQuiz = (state = {}, action) => {
  switch (action.type) {
    case 'GET_QUIZ':
    return action.quiz;
    case 'UPDATE_QUIZ':
      return action.quiz
    case 'DELETE_QUIZ':
      return {...state, quizzes: action.quizzes }
    default:
      return state
  }
}

export default singleQuiz
