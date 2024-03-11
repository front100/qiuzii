import { Text, StyleSheet, Pressable, View } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useState } from 'react';

interface IErrorViewProps {
  refetchData: () => void;
}

const ErrorView = ({ refetchData }: IErrorViewProps) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const setBtnBg = (pressed: boolean, isBtnDisabled: boolean) => {
    if (isBtnDisabled) return COLORS.gray;
    if (!isBtnDisabled) return COLORS.mainBlue;
    if (pressed) return COLORS.lightWhite;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ooops!</Text>
      <Text style={styles.description}>There's a network error</Text>

      <CountdownCircleTimer
        onComplete={() => setIsBtnDisabled(false)}
        isPlaying={true}
        duration={3}
        colors="#40A2E3"
        // key={questionNumber}
        size={60}
        strokeWidth={6}
      >
        {({ remainingTime }) => (
          <Text style={{ fontSize: SIZES.xLarge, fontFamily: FONT.bold }}>{remainingTime}</Text>
        )}
      </CountdownCircleTimer>

      <Pressable
        disabled={isBtnDisabled}
        onPress={refetchData}
        style={({ pressed }) => [
          {
            backgroundColor: setBtnBg(pressed, isBtnDisabled),
          },
          styles.button,
        ]}
      >
        <Text style={styles.btnText}>Try again</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default ErrorView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.xMedium,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.lightWhite,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.extraLarge,
    marginBottom: SIZES.large,
  },

  description: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    marginBottom: SIZES.medium,
  },

  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  btnText: {
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  },
});
