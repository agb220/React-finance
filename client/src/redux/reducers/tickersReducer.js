const initialState = {
  tickers: [],
  isLoaded: false,
  history: {},
};

const tickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TICKERS":
      return {
        ...state,
        tickers: action.payload,
        isLoaded: true,
      };

    case "SET_TICKERS_HISTORY":
      return {
        ...state,
        history: action.payload,
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
