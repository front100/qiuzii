import { Text, View, StyleSheet } from 'react-native';
import { FONT } from '../../constants';

const CategoryItem = ({ name }: { name: string }) => {
  return (
    <View style={styles.item}>
      <Text>{name}</Text>
    </View>
  );
};
export default CategoryItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 5,
    fontSize: 20,
    fontFamily: FONT.regular,
  },
});
