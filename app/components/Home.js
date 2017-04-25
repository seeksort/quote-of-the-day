import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';
import QuotesList from './quotes-list'

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

export default class Home extends Component {

  pickAPhrase() { 
    let randQuote = simpsonsQuotes[Math.floor(Math.random() * 10)]
    Alert.alert(
      'Phrase of the Day',
      `\"${randQuote.quote}\" - ${randQuote.speaker} `
    )
    randQuote = simpsonsQuotes[Math.floor(Math.random() * 10)]
  }

  render() {
    console.log('here')
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
            Random Simpsons quotes for okilly dokilly neighborinos.
          </Text>
        </View> 
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}
            onPress={this.pickAPhrase}>
            <Text style={styles.buttonText}>
              Click for a d'oh!
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button} onPress={() => {this.props.navigator.push({name: 'QuotesList', index: 1})}}>
              <Text style={styles.buttonText}>
                Quotes List
              </Text>
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
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#C5C5E5',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 45,
    fontFamily: (Platform.OS === 'ios' ? 'Arial' : 'serif'),
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#14248A'
  },
  instructions: {
    fontSize: 25,
    fontFamily: (Platform.OS === 'ios' ? 'Arial' : 'sans-serif-thin'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#998FC7',
    padding: 15,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#000',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: (Platform.OS === 'ios' ? 'Arial' : 'sans-serif'),
    fontWeight: 'bold',
    color: '#F9F5FF',
  },
});
