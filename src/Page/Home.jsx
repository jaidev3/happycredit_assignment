import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import ItemBody from "../Components/ItemBody";

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
          <Items>
            
            <ItemBody />
          </Items>
        </Body>
      </Wrapper>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 200px;
  text-align: left;
`;
const Body = styled.div`
  margin-top: 50px;
  display: flex;
`;
const Filter = styled.div`
  display: flex;
  width: 25%;
  height: 400px;
  @media (max-width: 768px) {
   display: none;
  }
`;
const Items = styled.div`
  display: flex;
  width: 75%;
  height: 500px;
  @media (max-width: 768px) {
   width: 100%;
  }
`;
// const Search = styled.div``;
