import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { socketTickers } from "./redux/actions/tickersAction";

import Header from "./components/Header";

import Main from "./components/Main";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(socketTickers());
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
