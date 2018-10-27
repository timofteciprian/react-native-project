// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
// import HomeScreen from './HomeScreen'
// import ProfileScreen from './ProfileScreen'
// import { createStackNavigator, } from 'react-navigation';


// const App = createStackNavigator({
//   Profile: { screen: ProfileScreen },
//   Home: { screen: HomeScreen },
// });

// export default App

// export { default as Nav } from './Nav';
import CoursesScreen from './components/courses/CoursesScreen'
import HomeScreen from './components/home/HomeScreen'
import JobsScreen from './components/jobs/JobsScreen'
import NewsScreen from './components/news/NewsScreen'
import { createBottomTabNavigator } from 'react-navigation'


export default createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Courses: {screen: CoursesScreen } ,
  Jobs: {screen: JobsScreen },
  News: {screen: NewsScreen }
});