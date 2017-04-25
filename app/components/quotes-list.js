import React, { Component } from 'react';
import {
  Text, 
  View,
  TouchableHighlight,
  Button,
  StyleSheet,
  Navigator
} from 'react-native';
import Quote from './quote';

export default class QuotesList extends Component {

  render() {
    return (
      <View>
        <View>
          <Quote quote="Absotively Posolutely!" speaker="Flanders" />
          <Quote quote="I hope I didn't brain my damage." speaker="Homer" />
          <Quote quote="This sounds like rock and/or roll!" speaker="Rev. Lovejoy" />
        </View>
        <TouchableHighlight onPress={() => {this.props.navigator.pop()}}>
          <Text style={styles.buttonText}>Back to Random Quotes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#C5C5E5',
  }
})