export interface IAnsweredQuestion {
  question: string;
  selectedAnswer: string;
  answers: string[];
  correctAnswer: string;
  isAnswerCorrect: boolean;
}

export type IUserAnsweredData = IAnsweredQuestion[];
