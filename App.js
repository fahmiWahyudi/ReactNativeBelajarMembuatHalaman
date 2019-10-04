import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'

import { TopTabNavigator } from './route'

const NavPage = createAppContainer(TopTabNavigator)

export default class App extends Component{
  render(){
    return(

      <View style={styles.container}>
        <NavPage />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5FCFF',
  }
});

