import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

socket.emit("start");

export const socketTickers = () => (dispatch) => {
  socket.on("ticker", function (response) {
    const data = Array.isArray(response) ? response : [response];
    dispatch(setTickers(data));
  });
};

export const setTickers = (tickers) => ({
  type: "SET_TICKERS",
  payload: tickers,
});

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});
