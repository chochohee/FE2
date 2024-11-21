import { useEffect, useLayoutEffect, useState } from "react";
import { QuizQuestion } from "../types/quiz";
import he from "he";

interface QuizGameProps {
  questions: QuizQuestion[];
}

export default function QuizGame({ questions }: QuizGameProps) {
  // 문제 순서 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[][]>([]);

  // 사용자의 답변을 저장합니다.
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = questions.map((question) => {
      return [...question.incorrect_answers, question.correct_answer].sort(
        () => Math.random() - 0.5
      );
    });
    setShuffledAnswers(shuffled);
  }, []);

  // 사용자 선택 정답을 저장하는 함수
  const handleAnswerSelect = (answer: string) => {
    const myAnswers = [...answers];
    myAnswers[currentIndex] = answer;
    setAnswers(myAnswers);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 누산기를 통해 정답의 개수를 파악합니다.
    questions.reduce((count, question, index)=>{
        return count + (question.correct_answer === answers[index]? 1 : 0)
    },0)
  };

  if (shuffledAnswers.length === 0) {
    return <div>Lodaing....</div>;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            문제 {currentIndex + 1} / {questions.length}
          </legend>
          <h2>{he.decode(currentQuestion.question)}</h2>
          {shuffledAnswers[currentIndex].map((answer, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  name="answer"
                  id={`answer-${index}`}
                  value={answer}
                  onChange={() => handleAnswerSelect(answer)}
                />
                <label htmlFor={`answer-${index}`}>{he.decode(answer)}</label>
              </div>
            );
          })}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0 ? true : false}
          >
            이전
          </button>
          {currentIndex === questions.length - 1 ? (
            <button type="submit">제출하기</button>
          ) : (
            <button onClick={handleNext}>다음</button>
          )}
        </fieldset>
      </form>
    </section>
  );
}
