import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text
} from 'react-native';

function Quote(props) {
  return (
    <View style={styles.quoteView}>
      <Text style={styles.quote}>
        {props.quote}
      </Text>
      <Text style={styles.speaker}>
        {props.speaker}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  quoteView: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 8
  },
  quote: {
    color: '#14248A',
    textAlign: 'left',
    fontSize: 20,
  },
  speaker: {
    color: '#28262C',
    textAlign: 'right',
    fontSize: 22,
  }
});

module.exports = Quote;