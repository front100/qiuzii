import { FlatList, Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { useRouter } from 'expo-router';

import type { TransformedData } from '../../interfaces/quizdata';

import { COLORS, FONT, SIZES } from '../../constants';
import AnswerItem from './AnswerItem';
import { delay } from '../../helpers/helpFunctions';
import { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../context/quizContext';

import StatusViewModern from './StatusViewModern';

const QuizView = () => {
  const router = useRouter();
  const { quizData, questionNumber, setQuestionNumber } = useContext(QuizContext);

  const { question: questionTitle, correctAnswer, answers } = quizData[questionNumber];

  const [isAnswered, setIsAnswered] = useState(false);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    setIsAnswered(false);
    setIsStart(true);
  }, [questionNumber]);

  const handleCorrectAnswer = async () => {
    setIsAnswered(true);

    await delay(1000);
    setIsStart(false);
    await delay(1500);
    setQuestionNumber((state) => state + 1);
    if (questionNumber === quizData.length - 1) router.replace('/quiz-page/results');
  };

  return (
    <View style={styles.container}>
      <StatusViewModern isAnswered={isAnswered} />
      <View style={styles.body}>
        <View style={styles.questionBlock}>
          <Text style={styles.questionText}>{questionTitle}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.answersBlock}>
          <FlatList
            ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
            data={answers}
            renderItem={({ item, index }) => (
              <Animatable.View duration={1500} animation={isStart ? 'fadeIn' : 'fadeOut'}>
                <AnswerItem
                  answer={item}
                  onPress={handleCorrectAnswer}
                  index={index}
                  questionNumber={questionNumber}
                  isAnswered={isAnswered}
                  isAnswerCorrect={item === correctAnswer}
                />
              </Animatable.View>
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default QuizView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flexBasis: '35%',
    paddingHorizontal: SIZES.large,
    paddingTop: SIZES.medium,
  },
  footer: {
    flexGrow: 1,

    paddingTop: SIZES.xxxLarge,
    backgroundColor: COLORS.mainGrey,
  },
  questionBlock: {
    minHeight: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.xSmall,
    // paddingVertical: 80,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: SIZES.xSmall,
  },
  questionText: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,

    textAlign: 'center',
  },
  answersBlock: {},
});
