export const setSection = section => {
  return { type: 'SET_SECTION', section };
};

export const clearSection = () => {
  return({ type: "CLEAR_SECTION", section: null })
}

