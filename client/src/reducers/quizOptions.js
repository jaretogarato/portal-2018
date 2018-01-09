const quizOptions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OPTION':
      return [...state, action.option]
    case 'UPDATE_OPTION':
      return state.map( option => {
        if(option.id === action.option.id)
          return action.option
        return option
      })
    case 'DELETE_OPTION':
      return state.filter( option => option.id !== action.id)
    case 'CLEAR_OPTIONS':
      return []
    default:
      return state
  }
}

export default quizOptions
