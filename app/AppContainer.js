import React, { Component } from 'react';

import { Navigator, Text } from 'react-native';

import SplashScene from './scenes/splashScene';
import LoginScene from './scenes/loginScene';
import HomeScene from './scenes/homeScene';

import SettingsStore from './stores/settingsStore';
import AuthStore from './stores/authStore';

const settingStore= new SettingsStore();
const authStore = new AuthStore();

export default class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      store: {
        settings: settingStore,
        auth: authStore
      }
    }
  }

  renderScene(route, navigator) {
    switch(route.title) {
      case 'Splash': {
        return <SplashScene {...route.passProps} navigator={navigator} />
      }
      case 'Login': {
        return <LoginScene {...route.passProps} navigator={navigator} />
      }
      case 'Home': {
        return <HomeScene {...route.passProps} navigator={navigator} />
      }
      default: {
        return null
      }
    }
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <Navigator
        ref={(ref) => this._navigator = ref}
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          title: "Home",
          passProps: {
            stores: this.state.store
          }
        }} />
    )
  }
}
