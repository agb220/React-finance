import React from "react";

import { io } from "socket.io-client";

import Header from "./components/Header";
import Search from "./components/search/Search";
import Main from "./components/Main";
import List from "./components/list/List";

import "./App.css";

function App() {
  const socket = io("http://localhost:4000");

  socket.emit("start");
  socket.on("ticker", function (response) {
    const data = Array.isArray(response) ? response : [response];
    console.log("data", data);
    // const json = data.map((item) => JSON.stringify(item)).join("\n");
    // console.log(json);
  });

  return (
    <>
      <Header />
      <Main>
        <Search />
        <List />
      </Main>
    </>
  );
}

export default App;
