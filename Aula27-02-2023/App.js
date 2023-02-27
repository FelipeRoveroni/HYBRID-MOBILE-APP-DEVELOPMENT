import { React, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import CustomButton from './components/CustomButton';
import Display from './components/Display';

export default function App() {
  let [displayValue, setDisplayValue] = useState(0);

  addDigit = n => {
    setDisplayValue(displayValue + n)
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue}/>
      <View style={styles.buttons}>
        <CustomButton label="A/C" otherButton />
        <CustomButton label="+/-" otherButton />
        <CustomButton label="%" otherButton />
        <CustomButton label="/" operationButton />
        <CustomButton label="7" onClick={addDigit}/>
        <CustomButton label="8" onClick={addDigit}/>
        <CustomButton label="9" onClick={addDigit}/>
        <CustomButton label="*" operationButton />
        <CustomButton label="4" onClick={addDigit}/>
        <CustomButton label="5" onClick={addDigit}/>
        <CustomButton label="6" onClick={addDigit}/>
        <CustomButton label="-" operationButton />
        <CustomButton label="1" onClick={addDigit}/>
        <CustomButton label="2" onClick={addDigit}/>
        <CustomButton label="3" onClick={addDigit}/>
        <CustomButton label="+" operationButton />
        <CustomButton label="0" doubleButton />
        <CustomButton label="." onClick={addDigit}/>
        <CustomButton label="=" operationButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
