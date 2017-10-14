export const setCourse = course => {
  console.log('setCourse action was called');
  return { type: 'SET_COURSE', course };
};
