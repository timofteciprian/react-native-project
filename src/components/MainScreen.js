import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CoursesScreen from './courses/CoursesScreen'
import HomeScreen from './home/HomeScreen'
import JobsScreen from './jobs/JobsScreen'
import NewsScreen from './news/NewsScreen'
import ProfileScreen from './profile/ProfileScreen'
import { createBottomTabNavigator } from 'react-navigation'

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Beauty'
  }
  render() {
    return (
      <AppTabNavigator />
    )
  }
}

const AppTabNavigator = createBottomTabNavigator ({
  Home: { screen: HomeScreen },
  Courses: { screen: CoursesScreen } ,
  News: { screen: NewsScreen },
  Jobs: { screen: JobsScreen },
  Profile: { screen: ProfileScreen }
});
 