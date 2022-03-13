import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { searchItem } from "../ReduxStore/action";
import Modal from "./Model";
function Search() {
  let dispatch = useDispatch();
  return (
    <>
      <Wrapper>
        <BiSearch />
        <Input
          placeholder="Search"
          type="text"
          onChange={(e) => {
            dispatch(searchItem(e.target.value));
          }}
        ></Input>
      </Wrapper>
    </>
  );
}

export default Search;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px;
  font-family: sans-serif;
  font-size: 16px;
  outline: none;
`;
