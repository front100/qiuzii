import { Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext';
import { FONT, SIZES } from '../../constants';

const RemainingQuestions = () => {
  const { questionNumber } = useContext(QuizContext);

  const questionNumberNormalize = questionNumber + 1;

  return <Text style={styles.text}>{questionNumberNormalize} / 10</Text>;
};
export default RemainingQuestions;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: SIZES.xMedium,
    fontFamily: FONT.medium,
    paddingBottom: 5,
  },
});
