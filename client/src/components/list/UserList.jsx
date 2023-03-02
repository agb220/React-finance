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

  // const userTicker = Object.keys(userTickers);
  // console.log("userTicker", userTicker);
  // console.log("userTickers", userTickers);
  // const tickers = useSelector(({ tickersReducer }) => tickersReducer.tickers);

  const data = useSelector(({ tickersReducer }) => tickersReducer.tickers);
  // console.log("data", data);

  // const tickers = Object.keys(data)
  //   .map(
  //     (key) => data[key].ticker
  //     // console.log("tickers[key]", data[key].ticker);
  //     // return
  //   )

  //tickers.filter(({ticker}) => ticker === user ticker в массиве то что у него там есть в редюсере)

  const addedTickers = Object.keys(userTickers).map((key) => {
    return userTickers[key].tickers[0];
  });

  const tickers = data
    // .map((ticker) => ticker)
    .filter((addedTickers) => {
      // console.log("data.ticker", data);
      return data;
      // console.log("userTicker", userTickers, ticker);

      // addedTickers === ticker ? ticker : [];
      // if (ticker === addedTickers) {
      //   return ticker;
      // } else {
      //   return [];
      // }
    });

  // console.log("tickers", tickers);

  // console.log("addedTickers", addedTickers);

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
        addedTickers.map((ticker, index) => (
          <UserItem
            ticker={ticker.ticker}
            price={ticker.price}
            change={ticker.change}
            percent={ticker.change_percent}
            key={ticker.ticker + index}
            onRemove={onRemoveUserTickers}
          />
        ))
      )}
    </Wrapper>
  );
}

export default UserList;
