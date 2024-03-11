import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

const NoInternetView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please enable the internet connection</Text>
      <Text style={styles.description}>
        This application requires an internet connection to work.
      </Text>
      <Text style={styles.description}>
        The questions for the quiz are taken from the Open Trivia Database
      </Text>
    </View>
  );
};
export default NoInternetView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
    backgroundColor: COLORS.mainRed,
  },
  title: {
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
    fontSize: SIZES.extraLarge,
    textAlign: 'center',
  },
  description: {
    paddingVertical: 10,
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
    fontSize: SIZES.large,
  },
});
