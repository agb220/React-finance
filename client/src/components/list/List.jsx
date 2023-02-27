import React from "react";

import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { setUserTickers } from "../../redux/actions/userTickersAction";

import Item from "./Item";

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: var(--fs-lg);
`;

function List() {
  const dispatch = useDispatch();
  const tickers = useSelector(({ tickersReducer }) => tickersReducer.tickers);

  const handleAddUserTickers = (tickers) => {
    dispatch(setUserTickers(tickers));
  };

  console.log("ticker List", tickers);
  return (
    <>
      <Wrapper>
        <Title>List tickers</Title>
        {tickers &&
          tickers.map((ticker, index) => (
            <Item
              ticker={ticker}
              key={ticker.ticker + index}
              onClickAddTickers={handleAddUserTickers}
            />
          ))}
      </Wrapper>
    </>
  );
}

export default List;
