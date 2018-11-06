import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import MyForm from './MyForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./images/slotpoker-icon.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>A simple login app</Text>
        </View>
        <View style={styles.myForm}>
          <MyForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67809f',
    width: Dimensions.get('window').width,
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  myForm: {
    flex: 1,
  },
  title: {
    color: '#fff',
  },
});
