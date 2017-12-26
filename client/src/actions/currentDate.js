export const getDate = currentDate => {
  return { type: 'GET_DATE', currentDate };
};

export const updateDate = newDate => {
  return { type: 'UPDATE_DATE', newDate }
}
