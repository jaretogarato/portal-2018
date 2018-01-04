const quizzes = ( state = [], action) => {
  switch (action.type) {
    case 'GET_QUIZZES':
     return action.quizzes;
    case 'ADD_QUIZ':
      return [action.quiz, ...state]
    default:
      return state;
  }
}

export default quizzes;