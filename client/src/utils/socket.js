import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

socket.emit("start");
socket.on("ticker", function (response) {
  const data = Array.isArray(response) ? response : [response];
  console.log("data", data);
  // const json = data.map((item) => JSON.stringify(item)).join("\n");
  // console.log(json);
});

export default socket;
