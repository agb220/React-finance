const initialState = {
  tickers: {},
};

const userTickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_TICKERS":
      return {
        ...state,
        tickers: action.payload,
      };

    default:
      return state;
  }
};

export default userTickersReducer;
