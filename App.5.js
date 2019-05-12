import React from 'react';
import {View, Text, Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


import HomeScreen from './src/components/home/Home'
import Movie from './src/components/movie/Movie'
import My from './src/components/my/My'

const TabNavigator = createStackNavigator(
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
