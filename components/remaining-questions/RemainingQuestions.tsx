import { Text, View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext';
import { COLORS, FONT, SIZES } from '../../constants';

const RemainingQuestions = () => {
  const { questionNumber } = useContext(QuizContext);
  // console.log(questionNumber);
  const questionNumberNormalize = questionNumber + 1;

  return <Text style={styles.text}>{questionNumberNormalize} / 10</Text>;
};
export default RemainingQuestions;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    // fontWeight: '600',
    // color: COLORS.gray,
    fontSize: SIZES.xMedium,
    fontFamily: FONT.medium,
    paddingBottom: 5,
  },
});
