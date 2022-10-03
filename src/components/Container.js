import Logo from "./Logo";
import Footer from "./Footer";
import styled from "styled-components";
import ContainerQuestions from "./Questions/ContainerQuestions";
import { useState } from "react";

export default function Container({ deck, display }) {
  const [answered, setAnswered] = useState([]);
  return (
    <Main display={display}>
      <Logo />
      <ContainerQuestions
        answered={answered}
        setAnswered={setAnswered}
        deck={deck}
      />
      <Footer answered={answered} deck={deck} />
    </Main>
  );
}

const Main = styled.main`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
