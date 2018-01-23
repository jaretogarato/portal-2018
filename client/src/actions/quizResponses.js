export const addResponse = (response) => (
  { type: 'ADD_RESPONSE', response }
)

export const updateResponse = (response) => (
  { type: 'UPDATE_RESPONSE', response }
)

export const removeResponse = (id) => (
  { type: 'REMOVE_RESPONSE', id }
)
