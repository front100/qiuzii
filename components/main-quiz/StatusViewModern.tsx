import { Text, View, StyleSheet } from 'react-native';
import QuestionTimer from '../timer/QuestionTimer';
import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext';
import { COLORS, SIZES } from '../../constants';
import QuizProgressBar from '../progress-bar/QuizProgressBar';
import RemainingQuestions from '../remaining-questions/RemainingQuestions';
import { SettingsContext } from '../../context/settingsContext';

const StatusViewModern = ({ isAnswered }: { isAnswered: boolean }) => {
  const { questionNumber } = useContext(QuizContext);
  const { timeForQuestion } = useContext(SettingsContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RemainingQuestions />
        <QuizProgressBar />
      </View>
      <View style={styles.bottom}>
        <QuestionTimer
          duration={timeForQuestion}
          questionNumber={questionNumber}
          isAnswered={isAnswered}
        />
      </View>
    </View>
  );
};
export default StatusViewModern;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.mainYellow,
    paddingHorizontal: SIZES.large,
    paddingTop: SIZES.small,
    // marginBottom: 80,
  },
  header: {
    // paddingBottom: SIZES.extraLarge,
    // flexDirection: 'row-reverse',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  bottom: {
    alignItems: 'center',
    paddingBottom: SIZES.extraLarge,
  },
});
