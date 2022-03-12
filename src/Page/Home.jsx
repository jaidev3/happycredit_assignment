import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

function Home() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Header />
        <Body>
          <Filter>
            <Categories />
          </Filter>
          <Items></Items>
        </Body>
      </Wrapper>
    </div>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 75%;
  margin: auto;
  text-align: left;
`;
const Body = styled.div`
  margin-top: 20px;
  display: flex;
`;
const Filter = styled.div`
  display: flex;
  width: 25%;
  height: 400px;
`;
const Items = styled.div`
  border: 1px solid green;
  display: flex;
  width: 75%;
  height: 500px;
`;
const Search = styled.div``;
