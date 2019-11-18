import React, { Component } from 'react';
import { View, Image, Button, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Dice from "../assets/dice"
import NumericInput from 'react-native-numeric-input'
 
class DiceRoller extends Component {
    constructor(props){
        super()
        this.state = {
            value: 1,
            bonus: 0,
            dice: 1,
            rolls: [],
            total: 0,
            date: {},
            history: [],
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
        title: 'Tabletop',
        headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('History')}>
                <Text style= {styles.navigation}>History</Text>
              </TouchableOpacity>
          ),
      };
    };

    handleClick= (dice)=>{
        this.roll(dice)
    };

    roll(dice){
        let i = 0
        let rolls = []
        let bonus = this.state.bonus
        while (i < this.state.dice){
        rolls.push((Math.floor(Math.random() * dice.sides) + 1))
        i++
        }
        let sum = arr => arr.reduce((a,b) => a + b, 0)
        Alert.alert(`${this.state.dice}d${dice.sides}+${bonus}\n total: ${(sum(rolls)+bonus)} \n rolls: ${rolls}`);
        this.setState(state=> {const history= state.history.concat({total: sum(rolls), rolls: rolls});
        return {history, rolls: []}
        });
        console.log("History:", this.state.history)
    }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.dice}>
             {Dice.map((dice) =>{return (
             <TouchableOpacity key = {dice.name} onPress={()=>this.handleClick(dice)}>
                 <Image style={styles.diceImage} source= {dice.image}/>
             <Text style={styles.diceText}>{dice.name}</Text> 
                 </TouchableOpacity>)
            })}
            </View>
        <View style = {styles.bottom}>
        <NumericInput 
            value={this.state.dice} 
            onChange={value => this.setState({dice: value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={200} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
             <NumericInput 
            value={this.state.bonus} 
            onChange={bonus => this.setState({bonus})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={200} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
        </View>
         <View style={styles.counterText}>
            <Text style = {{fontSize: 27,}}># of Dice</Text>
            <Text style = {{fontSize: 27,}}>Bonus</Text>
            </View>
      </View>       
    )
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
      paddingVertical: 20,
    },
    dice: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    diceImage:{
        width: 100, 
        height: 100
    },
    diceText: {
        fontSize: 27,
        textAlign: "center",
        flexDirection: 'row', 
        justifyContent: 'center',
    },
      bottom: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row', 
        alignItems: 'flex-end',
      },
      counterText:{
        flexDirection: 'row', 
        justifyContent: 'space-around',
      }
})

export default DiceRoller