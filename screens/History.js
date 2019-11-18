import * as React from 'react';
import { View, Text } from 'react-native';

class History extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
        title: 'History',
      };
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>History</Text>
        </View>
      );
    }
  }

  export default History