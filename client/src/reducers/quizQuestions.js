const quizQuestions = (state = [], action) => {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return action.questions
    case 'ADD_QUESTION':
      return [...state.questions, action.question]
    case 'UPDATE_QUESTION':
      return state.questions.map( q => {
        const { question } = action
        if (q.id === question.id)
          return question
        return q
      })
    default:
      return state
  }
}

export default quizQuestions
