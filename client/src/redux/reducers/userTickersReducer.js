const initialState = {
  tickers: {},
};

const userTickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_TICKERS":
      const currentUserTicker = !state.tickers[action.payload.ticker]
        ? [action.payload]
        : [...state.tickers[action.payload.ticker].tickers];

      const newTickers = {
        ...state.tickers,
        [action.payload.ticker]: {
          tickers: currentUserTicker,
        },
      };

      return {
        ...state,
        tickers: newTickers,
      };

    case "REMOVE_USER_TICKERS": {
      const newTickers = {
        ...state.tickers,
      };

      delete newTickers[action.payload];
      return {
        ...state,
        tickers: newTickers,
      };
    }

    default:
      return state;
  }
};

export default userTickersReducer;
