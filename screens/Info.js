import * as React from 'react';
import { View, Text } from 'react-native';

class Info extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
        title: 'Info',
      };
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Info Screen</Text>
        </View>
      );
    }
  }

  export default Info