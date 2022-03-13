import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
Modal.setAppElement("#root");

function SingleItem({ value }) {
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    await setData(value);
  };

  //////Model/////////////////
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  //console.log(value);
  return (
    <>
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

        {/* model */}
        <div className="mod">
          <div onClick={toggleModal}>
            {" "}
            <Img src={data.url} alt="product_image" />
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            style={customStyles}
          >
            <Button onClick={toggleModal}>
              <AiOutlineClose size="1em" />
            </Button>
            <Img1 src={data.url} alt="product_image" />
            <Copycode className="copycode">
              <h1>{data.title}</h1>
              <div className="code">
                <p>YourCode30</p>{" "}
              </div>
              <div className="copy">
                <p>Copy code and shop</p>
              </div>
              <p>
                Deals are offered directly by the retailer and subject to their
                terms. Klarna does not guarantee any deal. Klarna may get a
                commission.
              </p>
            </Copycode>
          </Modal>
        </div>
        {/* //model ends// */}

        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </Wrapper>
    </>
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
    cursor: pointer;
  }
`;
const Img1 = styled.img`
  width: 100%;
  height: 50%;
  padding: 0;
  margin: 0;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: white;
  align-self: end;
  position: absolute;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
`;
const Copycode = styled.div`
  text-align: center;
  h1 {
    margin: 0;
    margin-left: 6px;
    padding: 0;
    text-align: left;
  }
  .code {
    width: 95%;
    background-color: #dcd8d7;
    border: 1px solid;
    text-align: center;
    margin: auto;
    margin-top: 10px;
  }
  .copy {
    width: 95%;
    background-color: black;
    margin: auto;
    color: white;
    border: 1px solid;
    text-align: center;
    margin-top: 10px;
  }
`;
const Discount = styled.div`
  color: white;
  position: absolute;
  top: 140px;
  left: 12px;
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

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "550px",
    borderRadius: "10px",
    padding: "0",
    margin: "0",
    backgroundColor: "white",
  },
};
