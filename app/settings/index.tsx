import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT, SIZES } from '../../constants';
import TimerValueBtn from '../../components/settings-items/TimerValueBtn';
import { IconFontAwesome } from '../../components/icons-fonts/IconFontAwesome';

const SettingsPage = () => {
  const timerValues = [15, 30, 60, 90];

  return (
    <View style={styles.container}>
      <View style={styles.answerTimeBlock}>
        <View style={styles.textBlock}>
          <IconFontAwesome name="clock-o" size={34} color={COLORS.mainGreen} styleParams={{}} />
          <Text style={styles.text}>Time limit for answer</Text>
        </View>
        <View style={styles.btnsBlock}>
          <FlatList
            data={timerValues}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            horizontal
            renderItem={({ item }) => <TimerValueBtn value={item} />}
          />
        </View>
      </View>
      <View style={styles.horizontalLine}></View>
    </View>
  );
};
export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
  },
  answerTimeBlock: {
    paddingVertical: SIZES.medium,
  },
  textBlock: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    // textAlign: 'center',
  },
  btnsBlock: {
    alignItems: 'center',
    paddingTop: SIZES.medium,
  },
  horizontalLine: {
    borderBottomColor: COLORS.lightWhite,
    borderBottomWidth: 2,
    // marginVertical: 10,
    marginVertical: 10,
  },
});
