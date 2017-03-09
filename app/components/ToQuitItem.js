import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

export default class ToQuitItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.item.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#000000',
    borderWidth: 1,
    elevation: 1,
    padding: 20
  }
});
