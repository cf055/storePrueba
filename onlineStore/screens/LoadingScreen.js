import React, { Component } from 'react'
import { View, Text, ImageBackground, Image  } from 'react-native';
import Layout from '../constants/Layout'

export default function LoadingScreen () {
  return(
  <ImageBackground source={require('../assets/images/LoginScreen.jpg')} style={Layout.containerLoginDesing}>
    <Image style={{marginTop:50, borderRadius:150}} source={require('../assets/images/Logo.png')} />
    <View style={{marginTop: 60}}>
      <Text style={Layout.textLoginDesing}> CARGANDO </Text>
    </View>
    <View style={{marginTop: 40}}>
    </View>
  </ImageBackground>
  )
}  