import REACT from "./Questions/REACT";
import MED from "./Questions/MED";
import logo from "../assets/img/logo.png";
import styled from "styled-components";
import React from "react";
import Container from "./Container";
import Select from "react-select";

export default function Start() {
  const options = [
    { value: REACT, label: "React.js" },
    { value: MED, label: "Med" },
  ];
  const [deck, setDeck] = React.useState([]);
  const [display, setDisplay] = React.useState("flex");
  const [displayContent, setDisplayContent] = React.useState("none");

  function renderDeck() {
    setDisplay("none");
    setDisplayContent("flex");
  }

  return (
    <>
      <ContainerStart display={display}>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>

        <Select
          name="Deck"
          placeholder="Escolha seu deck"
          options={options}
          onChange={(e) => setDeck(e.value)}
          data-identifier="deck-selector"
        ></Select>
        <StartButton data-identifier="start-btn" onClick={renderDeck}>
          Iniciar Recall!
        </StartButton>
        <Container deck={deck} display={displayContent} />
      </ContainerStart>
      <Container deck={deck} display={displayContent} />
    </>
  );
}

const ContainerStart = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 50px 0;
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const StartButton = styled.button`
  color: #d70900;
  border: 1px solid #d70900;
  width: 202px;
  height: 54px;
  border-radius: 5px;
  font-size: 18px;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
