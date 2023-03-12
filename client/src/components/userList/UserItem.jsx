import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { IoTrashOutline } from "react-icons/io5";
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
  border-bottom: 1px solid #355e3b;
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
  display: flex;
  text-align: center;
  width: 70px;
  cursor: pointer;
`;
const ButtonText = styled.span`
  font-size: 10px;
  text-align: start;
  margin-left: 2px;
  align-items: center;
  margin-top: 5px;
`;

function UserItem({ ticker, price, change, percent, onRemove }) {
  const history = useSelector(({ tickersReducer }) => tickersReducer.history);
  const tickerHistory = history[ticker];
  const handleRemoveClick = () => {
    onRemove(ticker);
  };

  return (
    <>
      <Wrapper>
        <ItemBody>
          <ItemLogo>{ticker}</ItemLogo>
          <ItemPrice>{price}</ItemPrice>
          <ItemChange>{change}</ItemChange>
          <ItemPercent> {percent}</ItemPercent>
          {tickerHistory[tickerHistory.length - 1] >
            tickerHistory[tickerHistory.length - 2] ||
          tickerHistory[tickerHistory.length - 2] === undefined ? (
            <IoArrowUpOutline size="20px" color="green" />
          ) : (
            <IoArrowDownOutline size="20px" color="red" />
          )}
          <ItemButton onClick={handleRemoveClick}>
            <IoTrashOutline size="20px" />
            <ButtonText>Delete</ButtonText>
          </ItemButton>
        </ItemBody>
      </Wrapper>
    </>
  );
}

export default UserItem;
