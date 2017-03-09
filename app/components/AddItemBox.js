import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View
} from 'react-native';

export default class AddItemBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  handleChangeText(text) { this.setState({ text: text }) }

  //should submit to Firebase through Item Store and update ToQuitList
  handleButtonPress() {
    console.log("here")
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize='characters'
          style={styles.addItemBox}
          placeholder="Type Here To Add"
          onChangeText={(text) => { this.handleChangeText(text) } }
        />
        <Button
          style={styles.button}
          onPress={this.handleButtonPress}
          title="Commit"
          color="#841584"
          accessibilityLabel="Commit to quitting what you just typed in the box"
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2'
  },
  addItemBox: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    padding: 30,
    margin: 30,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#d6d7da'
  },
  button: {
    flex: 1
  }
})
