const subSection = (state = [], action) => {
  switch (action.type) {
    case 'SET_SUB_SECTION':
      return action.subSection;
    default:
      return state;
  }
}

export default subSection;
