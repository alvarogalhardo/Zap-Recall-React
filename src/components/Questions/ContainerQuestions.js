import Question from "./Question";

export default function ContainerQuestions({ answered, setAnswered, deck }) {
  return (
    <>
      {deck.map((q, i) => (
        <Question
          i={i}
          q={q}
          key={i}
          answered={answered}
          setAnswered={setAnswered}
        />
      ))}
    </>
  );
}
