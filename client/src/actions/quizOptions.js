export const addOption = (option) => (
  { type: 'ADD_OPTION', option }
)

export const updateOption = (option) => (
  { type: 'UPDATE_OPTION', option }
)

export const deleteOption = (id) => (
  { type: 'DELETE_OPTION', id }
)

export const clearOptions = () => (
  { type: 'CLEAR_OPTIONS' }
)
