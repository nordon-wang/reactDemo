import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class My extends Component{

  static navigationOptions = {
    title: 'Home',
    headerBackTitle:'返回哈哈',//设置返回此页面的返回按钮文案，有长度限制
  }


  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>my 页面</Text>

        <Button
          title="list"
          onPress={() => this.props.navigation.navigate('Movie')}
        />

        <Button
          title="home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}