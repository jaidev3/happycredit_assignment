import React, { useEffect, useState } from "react";
import styled from "styled-components";

function SingleItem({ value }) {
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    await setData(value);
  };
  console.log(value);
  return (
    <Wrapper>
      <Discount>
        <p>
          <b>{data.pre}</b>
        </p>
        <h3>
          {data.discount}
          <p>
            <b>{data.post}</b>
          </p>
        </h3>
      </Discount>
      <Img src={data.url} alt="product_image" />
      <h4>{data.title}</h4>
      <p>{data.description}</p>
    </Wrapper>
  );
}

export default SingleItem;

const Wrapper = styled.div`
  width: 230px;
  border-radius: 15px;
  margin-top: 30px;
  position: relative;

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
  width: 230px;
  height: 230px;
  border-radius: 15px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
const Discount = styled.div`
  color: white;
  position: absolute;
  top: 140px;
  left: 12px;
  z-index: 1;
  h3 {
    display: flex;
    margin-top: -20px;
    padding: 0;
    font-size: 58px;
    text-align: center;
    vertical-align: bottom;
  }

  p {
    font-size: 32px;
    margin: 0;
    padding: 0;
  }
`;
