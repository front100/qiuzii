import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

import * as Linking from 'expo-linking';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.description}>Welcome to Quizii App!</Text>
      <Text style={styles.description}>This application was created using React Native Expo.</Text>
      <Text style={styles.description}>
        API used for this project -{' '}
        <TouchableOpacity onPress={() => Linking.openURL('https://opentdb.com/')}>
          <Text style={styles.link}>Open Trivia Database</Text>
        </TouchableOpacity>
      </Text>

      <View style={styles.horizontalLine}></View>
      <Text style={styles.description}>Developer: Anar Huseynov</Text>

      <TouchableOpacity onPress={() => Linking.openURL('mailto:info@notfromweb.com')}>
        <Text style={styles.description}>info@notfromweb.com</Text>
      </TouchableOpacity>
    </View>
  );
};
export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D9276',
    padding: SIZES.medium,
  },
  title: {
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
    fontSize: 29,
    textAlign: 'center',
    paddingBottom: SIZES.large,
  },
  description: {
    paddingVertical: 10,
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
    fontSize: 18,
    textAlign: 'center',
  },
  link: {
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightWhite,
  },

  horizontalLine: {
    borderBottomColor: COLORS.lightWhite,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
