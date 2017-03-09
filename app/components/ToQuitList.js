import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

import ToQuitItem from './ToQuitItem';

export default class ToQuitList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: "Quit Smoking Weed"
        },
        {
          name: "Quit Getting Up Late"
        },
        {
          name: "Quit Drinking Coffee"
        }
      ])

    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ToQuitItem item={rowData}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  listView: {
    flex: 1,
    padding: 32,
    margin: 30
  }
});
