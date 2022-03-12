import styled from "styled-components";
import logo from "../Images/klaran_logo.png";
function Navbar() {
  return (
    <>
      <Wrapper>
        <div className="nav_left">
          <Img src={logo} alt="site logo" />
          <h4>Shop</h4>
          <h4>How it works</h4>
          <h4>Play in 4</h4>
          <h4>The shopping app</h4>
          <h4>Help</h4>
        </div>
        <div>
          <Button1>
            <b>Log in</b>
          </Button1>
          <Button2>
            <b>Get the app</b>
          </Button2>
        </div>
      </Wrapper>
    </>
  );
}

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  font-family: sans-serif;
  color: #343434;

  border-bottom: 1px solid #eaeaea;
  .nav_left {
    display: flex;
    width: 600px;
    justify-content: space-between;
  }
  h4 {
    :hover {
      color: #316b83;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const Img = styled.img`
  width: 75px;
  height: 18px;
  align-self: center;
`;
const Button1 = styled.button`
  background-color: white;
  color: black;
  border: 1px solid gray;
  border-radius: 15px;
  padding: 7px;
  padding-left: 17px;
  padding-right: 17px;
  margin: 5px;
  :hover {
    background-color: black;
    color: white;
  }
`;
const Button2 = styled.button`
  background-color: black;
  color: white;
  border: 1px solid gray;
  border-radius: 15px;
  padding: 7px;
  padding-left: 17px;
  padding-right: 17px;
  margin: 5px;
  :hover {
    background-color: white;
    color: black;
  }
`;
