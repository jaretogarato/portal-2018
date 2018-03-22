export const setSection = (section = null) => {
  return { type: 'SET_SECTION', section };
};

export const clearSection = () => {
  return({ type: "CLEAR_SECTION", section: null })
}

