import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
  View
} from 'react-native';

import Login from '../components/Login';
import { observer } from 'mobx-react/native';

@observer
export default class LoginScene extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { settings } = this.props.stores;

    return (
        <Image style={styles.loginBackgroundImage} source={settings.loginBG} >
          <View style={styles.container}>
            <Login {...this.props} />
          </View>
        </Image>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  /* REACT NATIVE BEST PRACTICE FOR FULL SCREEN IMAGES*/
  loginBackgroundImage: {
    flex: 1
  }
})
