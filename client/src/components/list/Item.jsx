import React from "react";

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
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;
const ItemName = styled.div``;
const ItemPrice = styled.div``;
const ItemChange = styled.div`
  border-radius: var(--radius);
  background-color: green;
  border: 1px solid green;
  padding: 0.5rem 1rem;
`;
const ItemPercent = styled.div``;

function Item({ ticker, price, change, change_percent }) {
  console.log("ticker", ticker);
  return (
    <>
      <Wrapper>
        <ItemBody>
          <ItemLogo>{ticker}</ItemLogo>
          <ItemName>Apple</ItemName>
          <ItemPrice>{price}</ItemPrice>
          <ItemChange>64.52</ItemChange>
          <ItemPercent> 0.84 %</ItemPercent>
          <IoArrowDownOutline size="20px" />
          <IoArrowUpOutline size="20px" />
          <IoAddCircleOutline size="20px" />
          <IoTrashOutline size="20px" />
        </ItemBody>
      </Wrapper>
    </>
  );
}

export default Item;
