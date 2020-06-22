import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, Button, TouchableOpacity  } from 'react-native';
import Layout from '../constants/Layout'

function LoginScreen() {
  return(
  <ImageBackground source={require('../assets/images/LoginScreen.jpg')} style={Layout.containerLoginDesing}>
    <Image style={{marginTop:50, borderRadius:150}} source={require('../assets/images/Logo.png')} />
    <View style={{marginTop: 60}}>
      <Text style={Layout.textLoginDesing} >CORREO</Text>
      <TextInput style={Layout.inputLoginDesing} placeholder={'Correo'} />
      <Text style={Layout.textLoginDesing} >CONTRASEÑA</Text>
      <TextInput style={Layout.inputLoginDesing} placeholder={'Contraseña'} />
    </View>
    <View style={{marginTop: 40}}>
    <TouchableOpacity onPress={() => alert('redireccionar a la pagina home')} style={Layout.buttonLoginDesing}>
        <Text>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('redireccionar a la pagina registro')} style={Layout.buttonLoginDesing}>
        <Text>Registrarse</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  )
}  

export default LoginScreen