const subSectionId = (state = null, action) => {
  switch (action.type) {
    case 'SET_SUB_SECTION_ID':
      return action.subSectionId
    default:
      return state;
  }
}

export default subSectionId;
