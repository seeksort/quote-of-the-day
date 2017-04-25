import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import Home from './app/components/Home'
import QuotesList from './app/components/quotes-list'

export default class TestProj extends Component {

  renderScene(route, navigator) {
    if(route.name == 'Home') {
      return <Home navigator={navigator} {...route.passProps} />
    }
    if(route.name == 'QuotesList') {
      return <QuotesList navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{name: 'Home', index: 0}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('TestProj', () => TestProj);
