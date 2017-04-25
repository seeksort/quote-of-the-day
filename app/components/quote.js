import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Quote extends Component {

  componentDidMount() {
    this.setState({
      quote: this.props.quote,
      speaker: this.props.speaker
    })
  } 

  render() {
    return (
      <View>
        <Text style={styles.quote}>
          {this.props.quote}
        </Text>
        <Text style={styles.speaker}>
          {this.props.speaker}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quote: {
    color: '#14248A',
    textAlign: 'left',
    fontSize: 20,
  },
  speaker: {
    color: '#28262C',
    textAlign: 'right',
    fontSize: 20,
  }
});