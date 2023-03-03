import React from "react";

import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { removeUserTickers } from "../../redux/actions/userTickersAction";

import UserItem from "./UserItem";

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;
const UserlistTitle = styled.h2`
  font-size: var(--fs-lg);
  color: #355e3b;
`;
const UserlistText = styled.div`
  padding: 1rem 0;
  font-size: 24px;
  color: #cecece;
  margin: 10px 300px;
`;

function UserList() {
  const dispatch = useDispatch();
  const userTickers = useSelector(
    ({ userTickersReducer }) => userTickersReducer.tickers
  );
  const data = useSelector(({ tickersReducer }) => tickersReducer.tickers);

  const addedTickers = Object.keys(userTickers).map((key) => {
    return key;
  });

  const onRemoveUserTickers = (ticker) => {
    if (window.confirm("Do you want to delete this ticker")) {
      dispatch(removeUserTickers(ticker));
    }
  };

  return (
    <Wrapper>
      <UserlistTitle>User List</UserlistTitle>
      {addedTickers.length === 0 ? (
        <UserlistText>You do not add any tickers to your list yet</UserlistText>
      ) : (
        data
          .filter(({ ticker }) => addedTickers.indexOf(ticker) !== -1)
          .map((ticker, index) => (
            <UserItem
              ticker={ticker.ticker}
              price={ticker.price}
              change={ticker.change}
              percent={ticker.change_percent}
              key={index}
              onRemove={onRemoveUserTickers}
            />
          ))
      )}
    </Wrapper>
  );
}

export default UserList;
