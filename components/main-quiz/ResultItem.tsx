import { StyleSheet, Text, View } from 'react-native';
import { IAnsweredQuestion } from '../../interfaces/userdata';

import { COLORS, FONT, SIZES } from '../../constants';
import ResultIcon from './ResultIcon';
interface IResultsItemProps {
  item: IAnsweredQuestion;
}

const ResultItem = ({ item }: IResultsItemProps) => {
  const { question, correctAnswer, isAnswerCorrect } = item;
  return (
    <View style={styles.item}>
      <View style={styles.itemTop}>
        <ResultIcon isAnswerCorrect={isAnswerCorrect} />
        <Text style={styles.question}>{question}</Text>
      </View>
      <Text style={styles.correctAnswer}>{correctAnswer}</Text>
    </View>
  );
};
export default ResultItem;

const styles = StyleSheet.create({
  item: {
    padding: SIZES.medium,

    elevation: 1,
    backgroundColor: 'white',
  },
  itemTop: {
    flexDirection: 'row',

    gap: SIZES.medium,
    alignItems: 'center',
  },
  iconBlock: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.mainRedRGBA,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBlockMain: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: COLORS.mainRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    flexWrap: 'wrap',
    flexShrink: 1,
    fontFamily: FONT.medium,
    fontSize: SIZES.xMedium,
    // padding: 10,
  },
  correctAnswer: {
    paddingTop: SIZES.medium,
    fontFamily: FONT.bold,
    fontSize: SIZES.xMedium,
    color: COLORS.mainGreen,
    textAlign: 'center',
  },
});
