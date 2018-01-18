const questionUpdates = (state = [], action) => {
  switch (action.type) {
    case 'ADD_UPDATE':
      return [...state, action.question]
    case 'EDIT_UPDATE':
      return state.map( q => {
        if (q.id === action.question.id)
          return action.question
        return q
      })
    case 'CLEAR_UPDATES':
      return []
    default:
      return state
  }
}

export default questionUpdates
