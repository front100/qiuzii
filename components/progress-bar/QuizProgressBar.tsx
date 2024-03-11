import { Bar as ProgressBar } from 'react-native-progress';
import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext';
import { COLORS } from '../../constants';

const QuizProgressBar = () => {
  const { questionNumber } = useContext(QuizContext);
  const questionNumberNormalize = questionNumber + 1;
  const progressNumber = questionNumberNormalize / 10;

  return (
    <ProgressBar
      height={12}
      width={null}
      progress={progressNumber}
      color={COLORS.mainBlue}
      unfilledColor="white"
      borderWidth={0}
      indeterminateAnimationDuration={1500}
      animationType="timing"
    />
  );
};
export default QuizProgressBar;
