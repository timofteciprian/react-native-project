import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Header from './Header'


export default class ProfileScreen extends Component {
  render()  {
    return (
      <View style={styles.container}>
        <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
})

AppRegistry.registerComponent('ProfileScreen', () => ProfileScreen)