import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import SingleItem from "./SingleItem";
import data from "../ProjectData/db.json";
import { useSelector } from "react-redux";

function ItemBody() {
  const dataLength = data.length;
  const searchValue = useSelector((state) => state.item);
  const [sortValue, setSortValue] = useState("az");
  const [sortData, setSortData] = useState([]);

  const sortfn = () => {
    // if (sortValue == "") {
    //   setSortData(data);
    // }
    if (sortValue == "az") {
      setSortData(data.sort((a, b) => a.title.localeCompare(b.title)));
    }
    if (sortValue == "za") {
      setSortData(data.sort((a, b) => b.title.localeCompare(a.title)));
    }
  };
  const handleChange = async (e) => {
    await setSortValue(e.target.value);
    console.log(sortValue);
  };

  useEffect(() => {
    sortfn();
  }, [sortValue]);

  //console.log(data);
  return (
    <Wrapper>
      <Search />
      <Header>
        <div>
          <b>{dataLength} deals</b>
        </div>
        <div className="sort">
          <form>
            <select name="sort" onChange={(e) => handleChange(e)}>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </form>
        </div>
      </Header>
      <Body>
        {sortData
          .filter((e) => {
            if (searchValue == "") return e;
            else if (e.title.toLowerCase().includes(searchValue.toLowerCase()))
              return e;
          })
          .map((e, i) => (
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
  column-gap: 20px;
  justify-content: center;
  margin-top: 15px;
`;
