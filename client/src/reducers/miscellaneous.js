const miscellaneous = ( state = [], action) => {
  switch (action.type) {
    case 'GET_MISCELLANEOUS':
      return action.miscellaneous
    case 'GET_MISCELLANEOU':
      return action.miscellaneous
    case 'UPDATE_MISC':
      if(state.id === action.miscellaneou.id)
        return action.miscellaneou;
    return state;
    case 'DELETE_MISC':
      return {...state, miscellaneous: action.miscellaneous };
    case 'ADD_MISCELLANEOU':
      return [action.miscellaneou, ...state]
    case 'CLEAR_MISCELLANEOUS':
      return action.miscellaneous
    default:
      return state;
  }
}

export default miscellaneous;
