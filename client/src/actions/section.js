export const setSection = section => {
  console.log('section action was called');
  return { type: 'SET_SECTION', section };
};
