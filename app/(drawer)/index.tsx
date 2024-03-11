import { Link } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import { difficultyData, categoriesData } from '../../helpers/quizParameters';

import { SelectList } from 'react-native-dropdown-select-list';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COLORS, FONT, SIZES } from '../../constants';
import { SettingsContext } from '../../context/settingsContext';
import { useMMKVNumber } from 'react-native-mmkv';
import useCheckConnection from '../../hooks/useCheckConnection';
import NoInternetView from '../../components/no-internet-view/NoInternetView';

const DrawerIndex = () => {
  const [categoryId, setCategoryId] = useState('');
  const [difficulty, setDifficulty] = useState('Any Difficulty');

  const [localTime, setLocalTime] = useMMKVNumber('time');
  const { setTimeForQuestion } = useContext(SettingsContext);
  const { connectionStatus, connectionType } = useCheckConnection();

  useEffect(() => {
    if (!localTime) return;
    setTimeForQuestion(localTime);
  }, []);

  if (!connectionStatus) return <NoInternetView />;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to QUIZII</Text>
        <Text style={styles.description}>
          Here you can start a quiz and try to answer as many questions correctly as possible.
        </Text>
        <Text style={styles.description}>
          First, you need to choose the category of the quiz and the difficulty of the questions.
        </Text>
        <Text style={styles.description}>Have Fun!</Text>
        <View style={styles.horizontalLine}></View>
        <View style={styles.quizSettings}>
          <View style={styles.select}>
            <SelectList
              defaultOption={{ key: '1', value: 'Any Category' }} //default selected option
              setSelected={setCategoryId}
              save="key"
              fontFamily={FONT.regular}
              data={categoriesData}
              search={false}
              arrowicon={<FontAwesome name="chevron-down" size={12} color={COLORS.mainBlue} />}
              boxStyles={styles.selectBoxStyle} //override default styles
              inputStyles={styles.selectInputStyles}
              dropdownStyles={styles.dropdownInputSTyles}
              dropdownTextStyles={styles.dropdownTextStyles}
            />
          </View>
          <View style={styles.select}>
            <SelectList
              defaultOption={{ key: '1', value: 'Any Difficulty' }} //default selected option
              setSelected={setDifficulty}
              save="value"
              fontFamily={FONT.regular}
              data={difficultyData}
              search={false}
              arrowicon={<FontAwesome name="chevron-down" size={12} color={COLORS.mainBlue} />}
              boxStyles={styles.selectBoxStyle} //override default styles
              inputStyles={styles.selectInputStyles}
              dropdownStyles={styles.dropdownInputSTyles}
              dropdownTextStyles={styles.dropdownTextStyles}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Link
            style={styles.startQuizBtn}
            href={{
              pathname: '/quiz-page',
              // /* 1. Navigate to the details route with query params */
              params: { category: categoryId, difficulty: difficulty },
            }}
            asChild
          >
            <Pressable style={({ pressed }) => [styles.startQuizBtn]}>
              {({ pressed }) => (
                <Text style={styles.startQuizBtnText}>
                  {pressed ? 'Starting...!' : 'START QUIZ'}
                </Text>
              )}
            </Pressable>
          </Link>
        </View>
      </View>
    </>
  );
};
export default DrawerIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBlue,
    padding: SIZES.medium,
  },
  title: {
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
    fontSize: 29,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    paddingVertical: 10,
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
    fontSize: 18,
  },
  quizSettings: {
    overflow: 'hidden',
    marginTop: 10,
    // backgroundColor: 'white',
  },
  select: {
    marginBottom: 10,
  },
  selectBoxStyle: {
    backgroundColor: 'white',
    borderRadius: 6,
    // marginBottom: 10,
  },
  selectInputStyles: {
    fontSize: 16,
  },
  dropdownInputSTyles: {
    backgroundColor: 'white',
  },

  dropdownTextStyles: {
    fontSize: 16,
  },
  startQuizBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 5,
  },
  startQuizBtnText: {
    fontFamily: FONT.bold,
    textAlign: 'center',
    color: COLORS.mainBlue,

    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  horizontalLine: {
    borderBottomColor: COLORS.lightWhite,
    borderBottomWidth: 1,
    // marginVertical: 10,
    marginVertical: 10,
  },
});
