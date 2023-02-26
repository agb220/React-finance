import React from "react";

import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: var(--fs-lg);
`;

function List() {
  return (
    <>
      <Wrapper>
        <Title>List tickers</Title>
        <Item />
      </Wrapper>
    </>
  );
}

export default List;
