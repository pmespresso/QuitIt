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


export default class LoginScene extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stores } = this.props;
    return (
        <Image style={styles.loginBackgroundImage} source={stores.settings.loginBG} >
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
