import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Home extends Component{
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>111 home 页面</Text>
        <Button
          title="Detail"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
        <Button
          title="list"
          onPress={() => this.props.navigation.navigate('Movie')}
        />

      </View>
    )
  }
}