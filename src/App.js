import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import MainScreen from './components/MainScreen'

export default class ProfileScreen extends Component {
  render()  {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator ({
  Main: { 
    screen: MainScreen
  }
})