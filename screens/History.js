import * as React from 'react';
import { View, Text } from 'react-native';
import DiceRoller from './DiceRoller'
import WebViewExample from './modalExample.js'

class History extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
        title: 'History',
      };
    };

      displayHistory(DiceRoller){
      console.log("Hello World! " + DiceRoller)
    }
    render() {
      this.displayHistory(DiceRoller.props)
      // DiceRoller.props.displayHistory("hksdh")
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>History </Text>
          <WebViewExample/>
        </View>
      );
    }
  }

  export default History