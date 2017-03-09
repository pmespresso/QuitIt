import React, { Component } from 'react';

import {
  ActivityIndicator,
  Button,
  TextInput,
  Image,
  View,
  StyleSheet,
  Text
} from 'react-native';

import { observer } from 'mobx-react/native';

@observer
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: null
    }
  }

  updateEmail(email) { this.setState({email: email}) }
  updatePassword(password) { this.setState({password: password}) }

  signIn() {
    const { auth } = this.props.stores;
    const { email, password } = this.state;

    this.setState({loading: true}, () => {
      auth.signIn({email, password}).then((promise) => {
          this.props.navigator.push({
            title: "Home",
            passProps: this.props
          })
        })
    })
  }

  render() {
    const { loading } = this.state;
    const { auth } = this.props.stores;

    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder='Please Enter Email'
          placeholderTextColor="#fff"
          value={this.state.email}
          onChangeText={(email) => { this.updateEmail(email)} }/>

        <TextInput style={styles.input}
          placeholder='Please Enter Password'
          placeholderTextColor="#fff"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(pass) => { this.updatePassword(pass)} } />

        <Button title="login" style={styles.button} onPress={this.signIn.bind(this)}>
          <Text>Login</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 100,
    padding: 30,
    margin: 30,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#d6d7da'
  },
  button: {
    flex: 1,
    padding: 30,
    backgroundColor: "steelblue"
  }
})
