const initialState = {
  tickers: [],
  isLoaded: false,
};

const tickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TICKERS":
      return {
        ...state,
        tickers: action.payload,
        isLoaded: true,
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default tickersReducer;
