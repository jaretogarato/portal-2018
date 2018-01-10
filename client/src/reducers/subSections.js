const subSections = (state = [], action) => {
  switch (action.type) {
    case 'SET_SUB_SECTION':
      return action.subSection;
    case 'GET_SUB_SECTIONS':
      return action.subSections;
    case 'CLEAR_SUB_SECTIONS':
      return action.subSections;
    case 'ADD_SUB_SECTION':
      return [...state, action.subSection]
    case 'UPDATE_SUB_SECTION':
      return state.map( subSection => {
        if (subSection.id === action.subSection.id)
          return action.subSection
        return subSection;
      })
    case 'DELETE_SUB_SECTION':
      return state.filter( ss => ss.id !== action.ss.id)
    default:
      return state;
  }
}

export default subSections;
