import React from "react";

import styled from "styled-components";

import { Container } from "./Container";

import List from "./list/List";
import UserList from "./list/UserList";

const Wrapper = styled.main`
  height: 100%;
  padding: 0.5rem 0;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

function Main() {
  return (
    <>
      <Wrapper>
        <Container>
          <List />
          <UserList />
        </Container>
      </Wrapper>
    </>
  );
}

export default Main;
