import { Image, View } from 'react-native';
import { icons } from '../../constants';
import styles from './menubtn.style';

const MenuBtn = () => {
  return (
    <View>
      <Image source={icons.menuIcon} style={styles.icon} />
    </View>
  );
};
export default MenuBtn;
