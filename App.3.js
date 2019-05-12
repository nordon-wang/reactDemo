import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


import HomeScreen from './src/components/home/Home'
import Movie from './src/components/movie/Movie'
import My from './src/components/my/My'


// 
// const homeStack = createStackNavigator({
//   Home:{
//     screen:HomeScreen,
//     navigationOptions:{
//       headerTitle:'首页-title',
//       headerTitleStyle:{
//         flex:1,
//         textAlign:'center'
//       }
//     },
//     path:'home'
//   }
// });

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Movie: {
      screen:Movie
    },
    My: {
      screen:My
    },
  }
);

export default createAppContainer(TabNavigator);