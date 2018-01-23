const quizResponses = (state = [], action) => {
  switch (action.type) {
    case 'GET_RESPONSES':
    case 'ADD_RESPONSE':
      return [...state, action.response]
    case 'UPDATE_RESPONSE':
      return state.map( r => {
        if (r.questionId === action.response.questionId)
          return action.response
        return r
      })
    case 'REMOVE_RESPONSE':
      return state.filter( r => r.questionId !== action.id )
    default:
      return state
  }
}

export default quizResponses
