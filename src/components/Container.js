import Logo from "./Logo";
import Footer from "./Footer";
import styled from "styled-components";
import ContainerQuestions from "./Questions/ContainerQuestions";
import { useState } from "react";



export default function Container() {
  const [answered, setAnswered] = useState([]);
  return (
    <Main>
      <Logo />
      <ContainerQuestions answered={answered} setAnswered={setAnswered}/>
      <Footer  answered={answered}/>
    </Main>
  );
}

const Main = styled.main`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
