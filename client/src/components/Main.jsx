import React from "react";

import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { Container } from "./Container";

import Search from "./search/Search";
import List from "./list/List";
import UserList from "./list/UserList";

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (max-width: 767px) {
    padding: 4rem 0;
  }
`;

function Main() {
  // const dispatch = useDispatch();

  // const handleAddUserTickers = (tickers) => {
  //   dispatch(setUserTickers(tickers));
  // };

  return (
    <>
      <Wrapper>
        <Container>
          <Search />
          <List />
          <UserList />
        </Container>
      </Wrapper>
    </>
  );
}

export default Main;
