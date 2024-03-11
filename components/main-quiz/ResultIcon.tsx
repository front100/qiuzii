import { StyleSheet, View } from 'react-native';
import { IconFontAwesome } from '../icons-fonts/IconFontAwesome';
import { COLORS } from '../../constants';

interface IResultIconProps {
  isAnswerCorrect: boolean;
}

const ResultIcon = ({ isAnswerCorrect }: IResultIconProps) => {
  return (
    <View
      style={[
        styles.outerCircle,
        isAnswerCorrect
          ? { backgroundColor: COLORS.mainGreenRGBA }
          : { backgroundColor: COLORS.mainRedRGBA },
      ]}
    >
      <View
        style={[
          styles.innerCircle,
          isAnswerCorrect
            ? { backgroundColor: COLORS.mainGreen }
            : { backgroundColor: COLORS.mainRed },
        ]}
      >
        <IconFontAwesome
          name={isAnswerCorrect ? 'check' : 'remove'}
          size={18}
          styleParams={{}}
          color="white"
        />
      </View>
    </View>
  );
};
export default ResultIcon;

const styles = StyleSheet.create({
  outerCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerCircle: {
    width: 30,
    height: 30,
    borderRadius: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
