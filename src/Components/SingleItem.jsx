import React from "react";
import styled from "styled-components";

function SingleItem({ value }) {
  console.log(value);
  return (
    <Wrapper>
      <Img src={value.url} alt="product_image" />
      <h4>{value.title}</h4>
      <p>{value.description}</p>
    </Wrapper>
  );
}

export default SingleItem;

const Wrapper = styled.div`
  width: 250px;
  border-radius: 15px;
  margin-top: 30px;
  background-image: url({value.url});
  p {
    margin: 0;
    padding-left: 3px;
  }
  h4 {
    margin-bottom: 0;
    margin-top: 5px;
    padding-left: 3px;
  }
`;
const Img = styled.img`
  width: 100%;
  border-radius: 15px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
