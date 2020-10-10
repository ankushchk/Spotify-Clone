export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove this token after developing to null
  // token:
  //   "BQB_mG9KlhnaFXXGBGK9PuF0TWUBH5vlUS5YDU6zNXlAARCh9C1QvYcSNe3hBzbZVZ60P-FVL5D7_puN6y9Dc0sBX-xhQDEEV0aShGuED9XfQpFLBLcttkspRJjhxX0Ig7e9D-uHb93c02STE3zg1CBQ7cPQBpwHEgTYpHA3WO9o6f8p",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
