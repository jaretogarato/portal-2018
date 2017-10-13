const activeSectionIndex = (state = null, action) => {
  switch(action.type) {
    case 'SET_SECTION':
      // debugger;
      return action.section;
    default:
      return state;
  }
}

export default activeSectionIndex;
