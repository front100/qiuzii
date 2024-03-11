type QuizCategory = {
  id: number;
  name: string;
};
type QuizTranformedCategory = {
  key: number;
  value: string;
};

export type QuizCategories = QuizCategory[];
export type QuizTransformedCategories = QuizTranformedCategory[];

export interface IQuizCategories {
  trivia_categories: QuizCategories;
}

export interface IResults {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IQuizList {
  response_code: number;
  results: IResults[];
}

export interface TransformedData {
  question: string;
  correctAnswer: string;
  answers: string[];
  category: string;
  difficulty: string;
}

const test: IQuizCategories = {
  trivia_categories: [{ id: 2, name: 'dddd' }],
};

const test2: IQuizList = {
  response_code: 2,
  results: [
    {
      'type': 'multiple',
      'difficulty': 'easy',
      'category': 'Science &amp; Nature',
      'question': 'Who discovered the Law of Gravity?',
      'correct_answer': 'Sir Isaac Newton',
      'incorrect_answers': ['Galileo Galilei', 'Charles Darwin', 'Albert Einstein'],
    },
  ],
};

// "type": "multiple",
// "difficulty": "easy",
// "category": "Science &amp; Nature",
// "question": "Who discovered the Law of Gravity?",
// "correct_answer": "Sir Isaac Newton",
// "incorrect_answers": [
// "Galileo Galilei",
// "Charles Darwin",
// "Albert Einstein"
// ]
