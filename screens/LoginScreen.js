import React, { Component } from 'react'
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout'
import { Zocial, MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return(
  <ImageBackground source={require('../assets/images/LoginScreen.jpg')} style={Layout.containerLoginDesing}>
    <Image style={{marginTop:50, borderRadius:150}} source={require('../assets/images/Logo.png')} />
    <View style={{marginTop: 60}}>
      <Text style={Layout.textLoginDesing} >CORREO</Text>
      <View style={{flexDirection: "row"}}>
        <Zocial name="email" style={Layout.iconDesing} size={24} />
        <TextInput style={Layout.inputLoginDesing} placeholder={'Correo'} />
      </View>
      <Text style={Layout.textLoginDesing} >CONTRASEÑA</Text>
      <View style={{flexDirection: "row"}}>
        <MaterialCommunityIcons name="textbox-password" style={Layout.iconDesing} size={24}/>
        <TextInput style={Layout.inputLoginDesing} placeholder={'Contraseña'} />
      </View>
    </View>
    <View style={{marginTop: 40}}>
    <TouchableOpacity 
    onPress={() => navigation.navigate('TapsScreen')} 
      style={Layout.buttonLoginDesing}>
        <Text>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => navigation.navigate('Register')}
      style={Layout.buttonLoginDesing}>
        <Text>Registrarse</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  )
}  

