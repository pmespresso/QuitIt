import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

import AppContainer from './app/AppContainer';

export default class QuitIt extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
AppRegistry.registerComponent('QuitIt', () => QuitIt);
