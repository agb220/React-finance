import React, { useState } from "react";

import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  max-width: 100%;
  margin-bottom: 1.5rem;
  background-color: var(--color-bg);

  @media (max-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  } ;
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search ...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--color-bg);
`;

function Search() {
  const [search, setSearch] = useState("");
  return (
    <>
      <InputContainer>
        <IoSearch />
        <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      </InputContainer>
    </>
  );
}

export default Search;
