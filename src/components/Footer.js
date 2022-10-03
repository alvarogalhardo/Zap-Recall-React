import styled from "styled-components";
import deck from "./Questions/Deck";
export default function Footer({ answered }) {
  return (
    <Foot data-identifier="flashcard-counter">
      {answered.length}/{deck.length} CONCLUÍDOS
      <Container>
      {answered.map((element,i)=><img src={element} alt="" key={i}/>)}
      </Container>
    </Foot>
  );
}

const Foot = styled.footer`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;
const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  background-color: aliceblue;
`;