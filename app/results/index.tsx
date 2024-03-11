import { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { QuizContext } from '../../context/quizContext';

const ResultsPage = () => {
  const { userTotalData } = useContext(QuizContext);

  return <View>{/* <Text>Results page</Text> */}</View>;
};
export default ResultsPage;
