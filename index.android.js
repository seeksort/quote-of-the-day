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
  Button,
  Alert
} from 'react-native';

const dailyJoys = [
  '👾 Dodging them invaders!',
  '😄 Stuff is chill.',
  '🍩 Someone bought donuts to the office!'
]

const onButtonPress = () => {
  getTimeout(this.setState // LEFT OFF HERE
    ,10000)
}

export default class TestProj extends Component {

  pickAPhrase = () => { Alert.alert(
    'Phrase of the Day',
    dailyJoys[Math.floor(Math.random() * 4)])
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.welcome}>
            FUNTIMES TIMER APP
          </Text>
        </View>
        <View styles={styles.buttonContainer}>
          <TouchableHighlight style={styles.wrapper}
            onPress={this.pickAPhrase}>
            <View style={styles.button}>
              <Text>Click Here</Text>
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
    flex: 1,
    backgroundColor: '#C5C5E5',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F9F5FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#14248A'
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#998FC7',
    padding: 10,
  },
});

AppRegistry.registerComponent('TestProj', () => TestProj);
