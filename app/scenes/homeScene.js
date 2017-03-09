/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

import ToQuitList from '../components/ToQuitList';
import AddItemBox from '../components/AddItemBox';

export default class HomeScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: null
    }
  }

  handleChangeText(text) {
    this.setState({text: text});
  }

  render() {
    return (
      <View style={styles.container}>
        <AddItemBox style={styles.addItemBox} />

        <ToQuitList style={styles.toQuitList}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  addItemBox: {
    flex: 0.2
  },
  toQuitList: {
    flex: 0.8
  }
});
