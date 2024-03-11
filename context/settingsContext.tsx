import { ReactNode, createContext, useState } from 'react';
import { IResults, TransformedData } from '../interfaces/quizdata';
import { IUserAnsweredData } from '../interfaces/userdata';

interface ISettingsContextValues {
  // isAnswerCorrect: boolean;
  // setIsAnswerCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  // quizData: TransformedData[];
  // setQuizData: React.Dispatch<React.SetStateAction<TransformedData[]>>;
  // questionNumber: number;
  // setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  // userTotalData: IUserAnsweredData | [];
  // setUserTotalData: React.Dispatch<React.SetStateAction<IUserAnsweredData | []>>;
  // isGameOver: boolean;
  // setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  // timerTime: number;
  // setTimerTime: React.Dispatch<React.SetStateAction<number>>;
  // isAnswered: boolean,
  timeForQuestion: number;
  setTimeForQuestion: React.Dispatch<React.SetStateAction<number>>;
}

const SettingsContext = createContext<ISettingsContextValues>({
  // isAnswerCorrect: false,
  // setIsAnswerCorrect: () => {},
  // setQuizData: () => {},
  // quizData: [],
  // questionNumber: 0,
  // setQuestionNumber: () => {},
  // userTotalData: [],
  // setUserTotalData: () => {},
  // isGameOver: false,
  // setIsGameOver: () => {},
  // timerTime: 30,
  // setTimerTime: () => {},
  timeForQuestion: 30,
  setTimeForQuestion: () => {},
});

const SettingsProvaider = ({ children }: { children: ReactNode }) => {
  // const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  // const [isGameOver, setIsGameOver] = useState(false);
  // const [quizData, setQuizData] = useState<TransformedData[]>([]);
  // const [questionNumber, setQuestionNumber] = useState(0);
  // const [userTotalData, setUserTotalData] = useState<IUserAnsweredData | []>([]);
  // const [timerTime, setTimerTime] = useState(30);
  const [timeForQuestion, setTimeForQuestion] = useState(30);

  return (
    <SettingsContext.Provider
      value={{
        timeForQuestion,
        setTimeForQuestion,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvaider };
