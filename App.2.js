import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


import Home from './src/components/home/Home'
import Movie from './src/components/movie/Movie'
import My from './src/components/my/My'


// 
const homeStack = createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      headerTitle:'首页-title',
      headerTitleStyle:{
        flex:1,
        textAlign:'center'
      }
    },
    path:'home'
  }
});


const movieStack = createStackNavigator({
  Home:{
    screen:Movie,
    navigationOptions:{
      headerTitle:'列表-title',
      headerTitleStyle:{
        flex:1,
        textAlign:'center'
      }
    },
    path:'home'
  }
});


const myStack = createStackNavigator({
  Home:{
    screen:My,
    navigationOptions:{
      headerTitle:'my-title',
      headerTitleStyle:{
        flex:1,
        textAlign:'center'
      }
    },
    path:'home'
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions:{
        tabBarLabel:'首页',
        // focused 是否选中
        // tintColor 设置当前颜色
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Image 
              style={{tintColor:tintColor,width:30, height:30, marginBottom:12, marginTop:10}}
              source={
                focused 
                ? require('./src/statics/images/Home1.png') 
                : require('./src/statics/images/Home.png') 
              }
            />
          )
        },
      }
    },
    Movie: {
      screen:movieStack,
      navigationOptions:{
        tabBarLabel:'列表',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <Image 
              style={{tintColor:tintColor,width:30, height:30, marginBottom:12, marginTop:10}}
              source={
                focused 
                ? require('./src/statics/images/list1.png') 
                : require('./src/statics/images/list.png') 
              }
            />
          )
        },
      }
    },
    My: {
      screen:myStack,
      navigationOptions:{
        tabBarLabel:'我的',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <Image 
              style={{tintColor:tintColor,width:30, height:30, marginBottom:12, marginTop:10}}
              source={
                focused 
                ? require('./src/statics/images/my.png') 
                : require('./src/statics/images/my.png') 
              }
            />
          )
        },
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);