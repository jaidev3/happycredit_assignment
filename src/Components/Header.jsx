import React, { useState } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";

function Header() {
  const [display, setDisplay] = useState("extension");
  const handleClose = () => {
    setDisplay("extension1");
    console.log(display);
  };
  console.log(display);
  return (
    <Wrapper>
      <p className="headingbold">All deals and coupons.</p>
      <p>
        The best online deals and coupons, including Klarna exclusives, updated
        daily.
      </p>
      <div className={display}>
        <p>
          Pay in 4 anywhere with the Chrome extension.
          <span>
            {" "}
            <b>Add to Chrome</b>
          </span>{" "}
        </p>
        <button onClick={() => handleClose()}>
          <FiX />
        </button>
      </div>
    </Wrapper>
  );
}

export default Header;
const Wrapper = styled.div`
  margin: auto;
  /* border: 1px solid; */
  text-align: left;
  .headingbold {
    font-size: 64px;
    font-weight: 600;
    color: #0e0e0f;
    font-family: sans-serif;
    margin-bottom: 5px;
    word-spacing: 0;
  }
  .extension1 {
    display: none;
  }
  .extension {
    display: flex;
    width: 100%;
    height: 76px;
    border-radius: 10px;
    background-color: #d1e2ff;
    justify-content: space-around;
    text-align: center;
    align-items: center;
  }

  span {
    text-decoration: underline;
    :hover {
      color: #316b83;
      cursor: pointer;
    }
  }
`;
