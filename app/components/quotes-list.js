import React, { Component } from 'react';
import {
  Platform,
  Text, 
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView
} from 'react-native';
import Quote from './quote';

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

function QuotesList(props) {
  return (
    <ScrollView>
      <Text style={styles.title}>Quotes List</Text>
      <View>
        {simpsonsQuotes.map(function(currentObj,index) {
          return (
            <Quote 
              key={'quote-'+ index}
              quote={currentObj.quote}
              speaker={currentObj.speaker} 
          />)
        })}
      </View>
      <TouchableHighlight style={styles.button} onPress={() => {props.navigator.pop()}}>
        <Text style={styles.buttonText}>Back to Random Quotes</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontFamily: (Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif-thin'),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
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
    fontFamily: (Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif'),
    fontWeight: 'bold',
    color: '#F9F5FF',
  },
})

module.exports = QuotesList;