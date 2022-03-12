import React from "react";
import styled from "styled-components";
import Search from "./Search";
import SingleItem from "./SingleItem";
import data from "../ProjectData/db.json";

function ItemBody() {
  const dataLength = data.length;
  //console.log(data);
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
      <Body>
        {data.map((e, i) => (
          <div key={i}>
            <SingleItem value={e} />
          </div>
        ))}
      </Body>
    </Wrapper>
  );
}

export default ItemBody;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  div {
    padding: 10px;
  }
`;
const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  column-gap: 15px;
  justify-content: center;
  margin-top: 15px;
`;
