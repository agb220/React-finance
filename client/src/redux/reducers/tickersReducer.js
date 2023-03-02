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
        history: state.tickers.reduce((accumulator, currentValue) => {
          if (accumulator[currentValue.ticker]) {
            accumulator[currentValue.ticker] = accumulator[
              currentValue.ticker
            ].concat([currentValue.price]);
          } else {
            accumulator[currentValue.ticker] = [currentValue.price];
          }
          return accumulator;
        }, {}),
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
