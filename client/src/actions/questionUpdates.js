export const addUpdate = (question) => {
  return { type: 'ADD_UPDATE', question }
}

export const editUpdate = (question) => {
  return { type: 'EDIT_UPDATE', question }
}

export const clearQuestions = () => {
  return { type: 'CLEAR_UPDATES' }
}
