const sections = (state = [], action) => {
  switch(action.type) {
    case 'GET_SECTIONS':
      return action.sections;
    case 'ADD_SECTION':
      return [...state, action.section]
    case 'CLEAR_SECTIONS':
      return action.sections;
    case 'UPDATE_SECTION':
      return state.map( section => {
        if(section.id === action.section.id)
          return action.section;
        return section;
      })
    case 'DELETE_SECTION':
      return state.filter( section => section.id !== action.section.id )
    default:
      return state;
  }
}

export default sections;
