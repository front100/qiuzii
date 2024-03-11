import { Text, View, StyleSheet } from 'react-native';
import QuestionTimer from '../timer/QuestionTimer';
import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext';
import { COLORS, SIZES } from '../../constants';
import QuizProgressBar from '../progress-bar/QuizProgressBar';
import RemainingQuestions from '../remaining-questions/RemainingQuestions';
import { SettingsContext } from '../../context/settingsContext';

const StatusView = ({ isAnswered }: { isAnswered: boolean }) => {
  const { questionNumber } = useContext(QuizContext);
  const { timeForQuestion } = useContext(SettingsContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <QuestionTimer
          duration={timeForQuestion}
          questionNumber={questionNumber}
          isAnswered={isAnswered}
        />
        <RemainingQuestions />
      </View>
      <QuizProgressBar />
    </View>
  );
};
export default StatusView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainYellow,
  },
  header: {
    padding: SIZES.xSmall,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
