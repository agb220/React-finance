import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { IoAddCircleOutline } from "react-icons/io5";
import { IoArrowDownOutline } from "react-icons/io5";
import { IoArrowUpOutline } from "react-icons/io5";

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
`;

const ItemBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cecece;
  padding-bottom: 0.5rem;
  box-shadow: 2px 5px #f6f6f6;
`;
const ItemLogo = styled.div`
  width: 70px;
  text-align: center;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;
const ItemPrice = styled.div`
  text-align: center;
  width: 70px;
`;
const ItemChange = styled.div`
  text-align: center;
  width: 50px;
`;
const ItemPercent = styled.div`
  text-align: center;
  width: 50px;
`;
const ItemButton = styled.a`
  text-align: center;
  width: 70px;
  display: flex;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-size: 10px;
  text-align: start;
  margin-left: 2px;
`;

function Item({ ticker, onClickAddTickers }) {
  const history = useSelector(({ tickersReducer }) => tickersReducer.history);

  const tickerHistory = history[ticker.ticker];

  const onAddUserTickers = () => {
    const userTicker = {
      ...ticker,
    };

    onClickAddTickers(userTicker);
  };

  return (
    <>
      <Wrapper>
        <ItemBody>
          <ItemLogo>{ticker.ticker}</ItemLogo>
          <ItemPrice>{ticker.price}</ItemPrice>
          <ItemChange>{ticker.change}</ItemChange>
          <ItemPercent> {ticker.change_percent}</ItemPercent>
          {tickerHistory[tickerHistory.length - 1] >
            tickerHistory[tickerHistory.length - 2] ||
          tickerHistory[tickerHistory.length - 2] === undefined ? (
            <IoArrowUpOutline size="20px" color="green" />
          ) : (
            <IoArrowDownOutline size="20px" color="red" />
          )}
          <ItemButton onClick={onAddUserTickers}>
            <IoAddCircleOutline size="20px" />
            <ButtonText>Add to User List</ButtonText>
          </ItemButton>
        </ItemBody>
      </Wrapper>
    </>
  );
}

export default Item;
