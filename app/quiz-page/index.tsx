import { StyleSheet, ActivityIndicator } from 'react-native';
import { useContext } from 'react';
import { useLocalSearchParams } from 'expo-router';
import useFetch from '../../hooks/useFetch';

import { selectQuizAPIUrl } from '../../helpers/helpFunctions';
import QuizView from '../../components/main-quiz/QuizView';
import { QuizContext } from '../../context/quizContext';
import { COLORS } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import ErrorView from '../../components/error-view/ErrorView';

const QuizPageMain = () => {
  const { category, difficulty } = useLocalSearchParams();
  const { questionNumber } = useContext(QuizContext);
  if (!category || !difficulty || Array.isArray(category) || Array.isArray(difficulty)) return;

  const apiUrl = selectQuizAPIUrl(category, difficulty);

  const { isLoading, error, quizData, refetchData } = useFetch(apiUrl);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <ActivityIndicator style={{ flex: 1 }} size="large" color={COLORS.mainBlue} />}
      {error && !isLoading && <ErrorView refetchData={refetchData} />}
      {!error && !isLoading && questionNumber < quizData.length && <QuizView />}
    </SafeAreaView>
  );
};
export default QuizPageMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.quizBG,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
