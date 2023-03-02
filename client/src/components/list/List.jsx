import React from "react";

import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { setUserTickers } from "../../redux/actions/userTickersAction";

import Loader from "../loader/Loader";
import Item from "./Item";

const Wrapper = styled.section`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: var(--fs-lg);
`;

function List() {
  const dispatch = useDispatch();
  const tickers = useSelector(({ tickersReducer }) => tickersReducer.tickers);
  const isLoaded = useSelector(({ tickersReducer }) => tickersReducer.isLoaded);
  // const history = useSelector(({ tickersReducer }) => tickersReducer.history);

  const handleAddUserTickers = (tickers) => {
    dispatch(setUserTickers(tickers));
  };

  //console.log("history 0bj", Object.keys(history));
  // console.log("history", history);
  // console.log(" tickers.price", tickers);

  // const prices = tickers.map((item) => {
  //   console.log(item.price);
  // });
  // console.log("prices", prices);
  return (
    <>
      <Wrapper>
        <Title>List tickers</Title>
        {isLoaded
          ? tickers &&
            tickers.map((ticker, index) => (
              <Item
                ticker={ticker}
                key={ticker.ticker + index}
                onClickAddTickers={handleAddUserTickers}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <Loader key={index} />)}
      </Wrapper>
    </>
  );
}

export default List;
