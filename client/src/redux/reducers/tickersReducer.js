const initialState = {
  tickers: [],
};

const tickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TICKERS":
      return {
        ...state,
        tickers: action.payload,
      };
    default:
      return state;
  }
};

export default tickersReducer;
