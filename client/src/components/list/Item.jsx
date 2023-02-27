import React, { useEffect } from "react";

import styled from "styled-components";

import { IoAddCircleOutline } from "react-icons/io5";
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
`;
const ItemLogo = styled.div`
  width: 70px;
  text-align: center;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;
const ItemName = styled.div`
  text-align: center;
  width: 70px;
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
  width: 50px;
`;
function Item({ ticker, onClickAddTickers }) {
  const onAddUserTickers = () => {
    const userTicker = {
      ...ticker,
    };

    onClickAddTickers(userTicker);
    console.log("click", userTicker);
  };

  const nameTicker = {
    AAPL: "Apple",
    GOOGL: "Alphabet",
    MSFT: "Microsoft",
    AMZN: "Amazon",
    FB: "Facebook",
    TSLA: "Tesla",
  };

  // console.log("onAddProduct", onAddProduct);

  return (
    <>
      <Wrapper>
        <ItemBody>
          <ItemLogo>{ticker.ticker}</ItemLogo>
          <ItemName>Apple</ItemName>
          <ItemPrice>{ticker.price}</ItemPrice>
          <ItemChange>{ticker.change}</ItemChange>
          <ItemPercent> {ticker.change_percent}</ItemPercent>
          <IoArrowDownOutline size="20px" />
          <IoArrowUpOutline size="20px" />
          <ItemButton onClick={() => console.log("clickkkkkk")}>
            Click
            <IoAddCircleOutline size="20px" />
          </ItemButton>
          <IoTrashOutline size="20px" />
        </ItemBody>
      </Wrapper>
    </>
  );
}

export default Item;
