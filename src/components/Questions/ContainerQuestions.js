import deck from "./Deck";
import Question from "./Question";

export default function ContainerQuestions({ answered, setAnswered }) {
  return (
    <>
      {deck.map((q, i) => (
        <Question i={i} q={q} key={i} answered={answered} setAnswered={setAnswered} />
      ))}
    </>
  );
}
