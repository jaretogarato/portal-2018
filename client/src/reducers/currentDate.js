const currentDate = (state = [], action) => {
  switch(action.type) {
    case 'GET_DATE':
      return action.currentDate
    case 'UPDATE_DATE':
      return action.newDate
    default: 
      return state;
  }
}

export default currentDate;