import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

socket.emit("start");

export const socketTickers = () => (dispatch, getState) => {
  socket.on("ticker", function (response) {
    //console.log("start");
    const data = Array.isArray(response) ? response : [response];

    dispatch(setTickers(data));

    const state = getState();
    //console.log("state", state);
    const history = data.reduce((accumulator, currentValue) => {
      // console.log("accumulator", accumulator, "currentValue", currentValue);

      if (accumulator[currentValue.ticker]) {
        accumulator[currentValue.ticker] = accumulator[
          currentValue.ticker
        ].concat([currentValue.price]);
      } else {
        accumulator[currentValue.ticker] = [currentValue.price];
      }
      return accumulator;
    }, state.tickersReducer.history);

    // console.log("data", data);

    dispatch(setTickersHistory(history));
  });
};

export const setTickers = (tickers) => ({
  type: "SET_TICKERS",
  payload: tickers,
});

export const setTickersHistory = (tickers) => ({
  type: "SET_TICKERS_HISTORY",
  payload: tickers,
});

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});
