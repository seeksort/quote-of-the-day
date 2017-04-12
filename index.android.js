/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Alert
} from 'react-native';

const simpsonsQuotes = [
  {"quote": "I hope I didn't brain my damage.", "speaker": "Homer"},
  {"quote": "Hi, Super Nintendo Chalmers!", "speaker": "Ralph"},
  {"quote": "Beer. Now there's a temporary solution.", "speaker": "Homer"},
  {"quote": "Talk to the audience? Oh, this part is always death.", "speaker": "Krusty the Clown"},
  {"quote": "This sounds like rock and/or roll!", "speaker": "Rev. Lovejoy"},
  {"quote": "And I, for one, welcome our insect Overlords...", "speaker": "Kent Brockman"},
  {"quote": "Absotively Posolutely!", "speaker": "Ned Flanders"},
  {"quote": "Don't have a cow, man.", "speaker": "Bart"},
  {"quote": "Thank you for correcting me, Lisa, people are always glad to be corrected.", "speaker": "Homer"},
  {"quote": "Our differences are only skin deep, but our sames go down to the bone.", "speaker": "Marge"}
]

export default class TestProj extends Component {

  componentWillMount() {
    console.log('testing debugger')
  }


  pickAPhrase = () => { 
    let randQuote = simpsonsQuotes[Math.floor(Math.random() * 10)]
    Alert.alert(
      'Phrase of the Day',
      `\"${randQuote.quote}\" - ${randQuote.speaker} `
    )
    randQuote = simpsonsQuotes[Math.floor(Math.random() * 10)]
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.welcome}>
            Quotebot
          </Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.instructions}>
            Click below for a random Simpsons quote
          </Text>
        </View> 
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.wrapper}
            onPress={this.pickAPhrase}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Click!
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.subContainer}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#C5C5E5',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F9F5FF',
  },
  welcome: {
    fontSize: 45,
    textAlign: 'center',
    margin: 10,
    color: '#14248A'
  },
  instructions: {
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#998FC7',
    padding: 15,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#F9F5FF',
  },
});

AppRegistry.registerComponent('TestProj', () => TestProj);
