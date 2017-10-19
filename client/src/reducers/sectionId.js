const sectionId = (state = null, action) => {
  switch(action.type) {
    case 'SET_SECTION':
      return action.section;
    default:
      return state;
  }
}

export default sectionId;
