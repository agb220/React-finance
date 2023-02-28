import React from "react";

import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { removeUserTickers } from "../../redux/actions/userTickersAction";

import UserItem from "./UserItem";

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

function UserList() {
  const dispatch = useDispatch();
  const userTickers = useSelector(
    ({ userTickersReducer }) => userTickersReducer.tickers
  );

  const addedTickers = Object.keys(userTickers).map((key) => {
    return userTickers[key].tickers[0];
  });
  console.log("addedTickers", addedTickers);

  console.log("userTickers", userTickers);

  const onRemoveUserTickers = (ticker) => {
    if (window.confirm("Do you want to delete this ticker")) {
      dispatch(removeUserTickers(ticker));
    }
  };

  return (
    <Wrapper>
      <h2>User List</h2>
      {addedTickers.map((ticker, index) => (
        <UserItem
          ticker={ticker.ticker}
          price={ticker.price}
          change={ticker.change}
          percent={ticker.change_percent}
          key={ticker.ticker + index}
          onRemove={onRemoveUserTickers}
        />
      ))}
    </Wrapper>
  );
}

export default UserList;
