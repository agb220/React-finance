export const setUserTickers = (tickers) => ({
  type: "SET_USER_TICKERS",
  payload: tickers,
});

export const removeUserTickers = (ticker) => ({
  type: "REMOVE_USER_TICKERS",
  payload: ticker,
});
