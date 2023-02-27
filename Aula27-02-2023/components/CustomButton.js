import {StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native';

const style = StyleSheet.create({
  button: {
    fontSize: 40,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888'
  }, 
  doubleButton: {
    width: (Dimensions.get('window').width / 4) * 2
  },
  operationButton: {
    color: '#FFF',
    backgroundColor: '#FF8002'
  },
  otherButton: {
    fontSize: 25,
    color: '#FFF',
    backgroundColor: '#BABACA'
  }
})

export default props => {
  const stylesButton = [style.button];
  
  if (props.otherButton) {
    stylesButton.push(style.otherButton)
  }
  if (props.operationButton) {
    stylesButton.push(style.operationButton)
  }
  if (props.doubleButton) {
    stylesButton.push(style.doubleButton)
  }

return (
  <TouchableHighlight onPress={() => props.onClick(props.label)}>
    <Text style={stylesButton}>{props.label}</Text>
  </TouchableHighlight>
  );
};

