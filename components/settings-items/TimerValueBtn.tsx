import { useContext, useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { SettingsContext } from '../../context/settingsContext';

import { COLORS, FONT, SIZES } from '../../constants';
import { useMMKVNumber } from 'react-native-mmkv';

interface ITimerValueBtnProps {
  value: number;
}

const TimerValueBtn = ({ value }: ITimerValueBtnProps) => {
  const { timeForQuestion, setTimeForQuestion } = useContext(SettingsContext);
  const [localTime, setLocalTime] = useMMKVNumber('time');

  const isActive = timeForQuestion === value;

  const handleTimeForQuestionOnPress = () => {
    setTimeForQuestion(value);
    setLocalTime(value);
  };
  return (
    <Pressable
      style={[styles.btn, isActive ? styles.activeBtn : null]}
      onPress={handleTimeForQuestionOnPress}
    >
      {({ pressed }) => (
        <Text style={[styles.text, isActive ? styles.activeText : null]}>{value}</Text>
      )}
    </Pressable>
  );
};
export default TimerValueBtn;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
  activeText: {
    color: 'white',
  },
  activeBtn: {
    backgroundColor: COLORS.mainGreen,
  },
});
