import { useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/img/seta_play.png";
import turnImg from "../../assets/img/seta_virar.png";
import x from "../../assets/img/icone_erro.png";
import v from "../../assets/img/icone_certo.png";
import interrogation from "../../assets/img/icone_quase.png";

export default function Question({ i, q, answered, setAnswered }) {
  const [Button, setButton] = useState(Closed);
  const [text, setText] = useState(`Pergunta ${i + 1}`);
  const [image, setImage] = useState(arrow);
  const [color, setColor] = useState("#333333");
  const [funct, setFunct] = useState(() => open);
  const [display, setDisplay] = useState("none");
  const [decor, setDecor] = useState("inherit");
  const [dataBtn, setDataBtn] = useState('flashcard-show-btn')
  const [dataQuest, setDataQuest] = useState('flashcard-index-item')

  function open() {
    setButton(Opened);
    setText(q.question);
    setImage(turnImg);
    setFunct(() => turn);
    setDataBtn('flashcard-turn-btn');
    setDataQuest('flashcard-question');
  }

  function turn() {
    setText(q.answer);
    setImage();
    setFunct(null);
    setDisplay("flex");
    setDataQuest("flashcard-answer");
  }

  function not() {
    setColor("#ff3030");
    setImage(x);
    setAnswered([...answered, x]);
    disable();
    
  }

  function almost() {
    setColor("#ff922e");
    setImage(interrogation);
    setAnswered([...answered, interrogation]);
    disable();
  }

  function zap() {
    setColor("#2fbe34");
    setImage(v);
    setAnswered([...answered, v]);
    disable();
  }

  function disable (){
    setButton(Closed);
    setFunct(null);
    setDecor("line-through");
    setDisplay("none");
    setText(`Pergunta ${i + 1}`);
    setDataBtn("flashcard-status");
  }

  return (
    <Button data-identifier="flashcard" color={color} decor={decor}>
      <p data-identifier={dataQuest}>{text}</p>
      <img
        src={image}
        alt=""
        data-identifier={dataBtn}
        onClick={funct}
      />
      <Container display={display}>
        <Not display={display} onClick={not} data-identifier="forgot-btn">
          Não lembrei{" "}
        </Not>
        <Almost display={display} onClick={almost} data-identifier="almost-forgot-btn">
          Quase lembrei
        </Almost>
        <Zap display={display} onClick={zap} data-identifier="zap-btn">
          Zap!
        </Zap>
      </Container>
    </Button>
  );
}

const Opened = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const Closed = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.color};
    text-decoration: ${(props) => props.decor};
  }
`;

const Not = styled.button`
  width: 90px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: #ff3030;
  border-radius: 5px;
  border: 1px solid #ff3030;
  padding: 5px;
`;

const Almost = styled.button`
  width: 90px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: #ff922e;
  border-radius: 5px;
  border: 1px solid #ff922e;
  padding: 5px;
`;

const Zap = styled.button`
  width: 90px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: #2fbe34;
  border-radius: 5px;
  border: 1px solid #2fbe34;
  padding: 5px;
`;

const Container = styled.div`
  display: ${(props) => props.display};
  width: 100%;
  justify-content: space-between;
`;
