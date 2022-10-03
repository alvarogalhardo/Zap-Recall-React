import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Logo() {
  return (
    <Header >
      <img src={logo} alt="logo"></img>
      <h1>ZapRecall</h1>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
