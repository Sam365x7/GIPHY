// adding to list
export const addToList = (GIFS) => ({
  type: 'ADDTOLIST',
  payload: GIFS,
});

export const removeFromList = (GIFS) => ({
  type: 'REMOVEFROMLIST',
  payload: GIFS,
});
