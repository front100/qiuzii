import { decode } from 'html-entities';

export const decodeText = (text: string) => {
  return decode(text);
};

export const selectQuizAPIUrl = (category: string, difficulty: string) => {
  const difficultyLower = difficulty.toLowerCase();

  if (category === '1' && difficulty === '1') return 'api.php?amount=10&type=multiple';
  if (category === '1' && difficulty !== '1')
    return `api.php?amount=10&difficulty=${difficultyLower}&type=multiple`;
  if (category !== '1' && difficulty === '1')
    return `api.php?amount=10&category=${category}&type=multiple`;
  if (category !== '1' && difficulty !== '1')
    return `api.php?amount=10&category=${category}&difficulty=${difficultyLower}&type=multiple`;
  else return 'api.php?amount=10&type=multiple';
};

const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const createAnswers = (incorrectAnswers: string[], correctAnswer: string) => {
  const decodedIncorrectAnwsers = incorrectAnswers.map((answer) => decodeText(answer));
  const decodedCorrectAnsweer = decodeText(correctAnswer);
  const allAnswers = [...decodedIncorrectAnwsers, decodedCorrectAnsweer];
  return shuffle(allAnswers);
};

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
