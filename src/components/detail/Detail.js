import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Detail extends Component{
  static navigationOptions = {
    title: 'Detail Page',
  };
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MovieMovieMovieMovie</Text>

        <Button
          title="my"
          onPress={() => this.props.navigation.navigate('My')}
        />

        <Button
          title="home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}