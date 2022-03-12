import React from "react";
import styled from "styled-components";
function Categories() {
  return (
    <Wrapper>
      <div>
        <h3>Categories</h3>
        <p>All</p>
        <p>Babies & Kids</p>
        <p>Clothing & Apparel</p>
        <p>Computers & Accessories</p>
        <p>Consumer Electronics</p>
        <p>Education</p>
        <p>Gifts</p>
        <p>Health & Beauty</p>
        <p>Holidays & Occasions</p>
        <p>Household</p>
      </div>
      <hr />
      <div>
        <h3>Filter</h3>

        <div>
          <h4>Types</h4>
          <p>
            <input type="checkbox" /> Only Coupons
          </p>
          <p>
            <input type="checkbox" /> Exclusives{" "}
          </p>
          <p>
            <input type="checkbox" /> BOGO and more
          </p>
        </div>
        <hr />
        <div>
          <h4>Discount</h4>
          <p>
            <input type="checkbox" /> 0-49% off
          </p>
          <p>
            <input type="checkbox" /> 50-8-% off{" "}
          </p>
  
        </div>
        <hr />
      </div>
    </Wrapper>
  );
}

export default Categories;

const Wrapper = styled.div`
  width: 100%;
  font-family: sans-serif;
`;
