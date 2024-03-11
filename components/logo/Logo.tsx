import { Image, View } from 'react-native';

import { icons } from '../../constants';
import styles from './logo.style';

const LogoIcon = () => {
  return (
    <View>
      <Image source={icons.logoIconWhite} style={styles.icon} />
    </View>
  );
};
export default LogoIcon;
