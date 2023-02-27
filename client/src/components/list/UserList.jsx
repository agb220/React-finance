import React from "react";

import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

function UserList() {
  const userTickers = useSelector(
    ({ userTickersReducer }) => userTickersReducer.tickers
  );

  console.log("userTickers", userTickers);
  return (
    <Wrapper>
      <h2>User List</h2>
    </Wrapper>
  );
}

export default UserList;
