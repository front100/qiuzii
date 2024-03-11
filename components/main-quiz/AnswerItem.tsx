import { Pressable, Text, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';
import { ReactNode, useEffect } from 'react';
import { decode } from 'html-entities';
import { useState, useContext } from 'react';
import { QuizContext } from '../../context/quizContext';
import { IAnsweredQuestion } from '../../interfaces/userdata';
import * as Animatable from 'react-native-animatable';

interface IAnswerItemProps {
  answer: string;
  index: number;
  onPress: (answer: string) => void;
  isAnswered: boolean;
  isAnswerCorrect: boolean;
  questionNumber: number;
}

const AnswerItem = ({
  answer,
  index,
  onPress,
  isAnswered,
  isAnswerCorrect,
  questionNumber,
}: IAnswerItemProps) => {
  const { setUserTotalData, userTotalData, quizData } = useContext(QuizContext);
  const [isTouched, setIsTouched] = useState(false);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    setIsTouched(false);
    setIsStart(true);
  }, [questionNumber]);

  const handleAnswer = () => {
    onPress(answer);
    setIsTouched(true);

    const userData: IAnsweredQuestion = {
      question: quizData[questionNumber].question,
      selectedAnswer: answer,
      answers: quizData[questionNumber].answers,
      correctAnswer: quizData[questionNumber].correctAnswer,
      isAnswerCorrect,
    };
    setUserTotalData((state) => [...state, userData]);
    setIsStart(false);
  };

  let touchedStyle;

  if (isTouched && isAnswered && isAnswerCorrect) touchedStyle = styles.valid;
  else if (isTouched && isAnswered && !isAnswerCorrect) touchedStyle = styles.invalid;
  else if (!isTouched && isAnswered && isAnswerCorrect) touchedStyle = styles.valid;
  else touchedStyle = styles.start;

  return (
    <Pressable
      onPress={handleAnswer}
      style={[styles.answerBtn, touchedStyle]}
      disabled={isAnswered}
    >
      <Text style={[styles.text]}>{answer}</Text>
    </Pressable>
  );
};
export default AnswerItem;

const styles = StyleSheet.create({
  answerBtn: {
    backgroundColor: COLORS.mainBlue,
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.large,
    borderRadius: SIZES.xSmall,
    marginHorizontal: SIZES.large,
  },
  text: {
    fontSize: SIZES.xMedium,
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
  },
  valid: {
    backgroundColor: COLORS.mainGreen,
  },
  invalid: {
    backgroundColor: COLORS.mainRed,
  },
  start: {
    backgroundColor: COLORS.mainBlue,
  },
  answersBlock: {
    // backgroundColor: 'lightblue',
  },
});
