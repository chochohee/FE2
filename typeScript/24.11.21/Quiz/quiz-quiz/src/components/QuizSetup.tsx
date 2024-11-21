import styled from "styled-components";
import { QuizConfig } from "../types/quiz";
import { useState } from "react";

interface QuizSetupProps {
  onStart: (config: QuizConfig) => void;
}

export default function QuizSetup({ onStart }: QuizSetupProps) {
  const [amount, setAmount] = useState(3);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "easy"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart({ amount, category, difficulty });
  };

  return (
    <section>
      <SetupForm onSubmit={handleSubmit}>
        <fieldset>
          <legend>퀴즈 설정</legend>
          <FormGroup>
            <label>
              문제 수: {amount}개
              <input
                type="range"
                min={3}
                max={10}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label>
              카테고리
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(Number(e.target.value))}
              >
                <option value="9">일반상식</option>
                <option value="21">스포츠</option>
                <option value="23">역사</option>
                <option value="24">정치</option>
                <option value="25">예술</option>
              </select>
            </label>
          </FormGroup>
          <FormGroup>
            <label>
              난이도
              <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => {
                  setDifficulty(e.target.value as "easy" | "medium" | "hard");
                }}
              >
                <option value="easy">쉬움</option>
                <option value="medium">보통</option>
                <option value="hard">어려움</option>
              </select>
            </label>
          </FormGroup>
          <StartButton type="submit">퀴즈 시작하기</StartButton>
        </fieldset>
      </SetupForm>
    </section>
  );
}

// 스타일 컴포넌트 정의
const SetupForm = styled.form`
  fieldset {
    border: none;
    padding: 0;
  }
  legend {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  select,
  input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  select {
    padding: 0.5rem;
  }

  input[type="range"] {
    margin-top: 0.5rem;
  }
`;

const StartButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #4caf50; // 초록색 배경
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049; // 호버 시 더 어두운 초록색
  }
`;
