import { Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { FONT, SIZES } from '../../constants';

interface IQuestionTimerProps {
  duration: number;
  questionNumber: number;
  isAnswered: boolean;
}

const QuestionTimer = ({ duration, questionNumber, isAnswered }: IQuestionTimerProps) => {
  const router = useRouter();

  return (
    <View style={styles.timer}>
      <CountdownCircleTimer
        onComplete={() => router.replace('/quiz-page/results')}
        isPlaying={!isAnswered}
        duration={duration}
        colors="#40A2E3"
        key={questionNumber}
        size={80}
        strokeWidth={10}
      >
        {({ remainingTime }) => (
          <View style={styles.remainingTimeBlock}>
            <Text style={{ fontSize: SIZES.xLarge, fontFamily: FONT.bold }}>{remainingTime}</Text>
          </View>
        )}
      </CountdownCircleTimer>
    </View>
  );
};
export default QuestionTimer;

const styles = StyleSheet.create({
  timer: {
    paddingTop: SIZES.xSmall,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    // transform: [{ translateX: -50 }],
  },

  remainingTimeBlock: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
