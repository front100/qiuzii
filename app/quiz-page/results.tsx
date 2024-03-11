import { useContext } from 'react';
import { useNavigation, useRouter } from 'expo-router';

import { FlatList, StyleSheet, Text, View } from 'react-native';
import { QuizContext } from '../../context/quizContext';
import { FONT, SIZES } from '../../constants';
import ResultItem from '../../components/main-quiz/ResultItem';

import ResultIcon from '../../components/main-quiz/ResultIcon';

const ResultsPage = () => {
  const { userTotalData } = useContext(QuizContext);
  // Navigation
  const navigation = useNavigation();
  const router = useRouter();

  // Effect
  // useEffect(() => {
  //   navigation.addListener('beforeRemove', (e) => {
  //     e.preventDefault();
  //     console.log('onback');
  //     // Do your stuff here
  //     // router.push('(drawer)');
  //     // navigation.dispatch(e.data.action);
  //   });
  // }, []);

  if (userTotalData.length <= 0)
    return (
      <View style={styles.containerCenter}>
        <Text style={{ fontSize: SIZES.xMedium, fontFamily: FONT.medium }}>
          You haven't answered a single question
        </Text>
      </View>
    );

  const correct = userTotalData.filter((item) => item.isAnswerCorrect).length;
  const inCorrect = userTotalData.filter((item) => !item.isAnswerCorrect).length;

  return (
    <View style={styles.container}>
      <View style={styles.totalBlock}>
        <View style={styles.totalInfo}>
          <ResultIcon isAnswerCorrect={true} />
          <Text style={styles.totalText}>{correct}</Text>
        </View>
        <View style={styles.totalInfo}>
          <ResultIcon isAnswerCorrect={false} />
          <Text style={styles.totalText}>{inCorrect}</Text>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={userTotalData}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={({ item }) => <ResultItem item={item} />}
      ></FlatList>
    </View>
  );
};
export default ResultsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZES.xxxLarge,
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SIZES.extraLarge,

    padding: SIZES.medium,
    marginBottom: SIZES.small,
  },
  totalInfo: {
    flexDirection: 'row',

    alignItems: 'center',
    gap: SIZES.small,
  },
  totalText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xMedium,
  },
  pageTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    marginBottom: SIZES.large,
  },
});
