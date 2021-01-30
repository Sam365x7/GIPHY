// Initial State
const initialState = {
  favouriteGIFSList: [],
};
// Reducers (Modifies The State And Returns A New State)
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'ADDTOLIST': {
      return {
        ...state,
        favouriteGIFSList: [action.payload, ...state.favouriteGIFSList],
      };
    }

    case 'REMOVEFROMLIST': {
      return {
        ...state,
        // favouriteGIFSList: [action.payload, ...state.favouriteGIFSList],
        favouriteGIFSList: state.favouriteGIFSList.filter(
          (GIFS) => GIFS !== action.payload,
        ),
      };
    }
    // Default
    default:
      return state;
  }
};
// Exports
export default listReducer;
