const miscellaneous = ( state = [], action) => {
  switch (action.type) {
    case 'GET_MISCELLANEOUS':
      return action.miscellaneous
    case 'ADD_MISCELLANEOU':
      return [action.miscellaneou, ...state]
    case 'CLEAR_MISCELLANEOUS':
      return action.miscellaneous
    default:
      return state;
  }
}

export default miscellaneous;