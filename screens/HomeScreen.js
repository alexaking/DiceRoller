import * as React from 'react';
import {View, Button, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: () => (
        <TouchableOpacity
              onPress={() => navigation.navigate('Info')}>
                <Text style= {styles.navigation}>Info</Text>
              </TouchableOpacity>
      ),
    };
  };
    render() {
      const {navigate} = this.props.navigation;
      return (
          <View style={styles.container}>
        <Text style={styles.containerText}>Welcome to DiceRoller!</Text>
        <TouchableOpacity onPress={() => navigate('DiceRoller')}>
        <Image
        style={{width: 250, height: 250}}
        source={require('../assets/d20lineart.png')}
        />
        </TouchableOpacity>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    navigation: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
    containerText: {
        fontSize: 27,
      }
})

  export default HomeScreen