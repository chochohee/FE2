// 퀴즈 설정과 관련된 interface
export interface QuizConfig {
    amount: number;
    category: number;
    difficulty: 'easy' | 'medium' | 'hard';

}

// 받아오는 퀴즈 데이터 형식을 정의하는 interface
export interface QuizQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[]
}


// 퀴즈의 결과 정보를 정의하는 interface
export interface QuizSummary{
    score: number;
    correctAnswers: number;
    totalQuestions: number;
    
}
/*
{
    "type": "multiple",
    "difficulty": "easy",
    "category": "Mythology",
    "question": "Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?",
    "correct_answer": "Jason",
    "incorrect_answers": [
      "Castor",
      "Daedalus",
      "Odysseus"
    ]
  }, */
