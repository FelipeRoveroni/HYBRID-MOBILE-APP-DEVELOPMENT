import {StyleSheet,  Text, View} from 'react-native';

const styles = StyleSheet.create({
  displayContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#5A5A5A',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#FFF'
  }
})

export default props => (
  <View style={styles.displayContainer}>
    <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
  </View>
)