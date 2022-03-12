import React from "react";
import styled from "styled-components";
import Search from "./Search";
import SingleItem from "./SingleItem";
import data from '../ProjectData/db.json'

function ItemBody() {
    const dataLength = data.length;
  return (
    <Wrapper>
      <Search />
      <Header>
        <div>
          <b>{dataLength} deals</b>
        </div>
        <div className="sort">
          <b>Sorting</b>
        </div>
      </Header>
      
      <SingleItem />
    </Wrapper>
  );
}

export default ItemBody;

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    padding: 10px;
  }
`;
