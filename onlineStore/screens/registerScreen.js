import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, Button, TouchableOpacity  } from 'react-native';
import Layout from '../constants/Layout'

export default function RegisterScreen({ navigation }) {
  return(

    <View style={Layout.containerRegisterDesing}>
    <Image style={{marginTop:50, borderRadius:150, width:100, height:100}} source={require('../assets/images/Logo.png')} />
    <View style={{marginTop: 50}}>
      <Text style={{fontSize: 25, textAlign: 'center', color:'#4b2fd5', fontWeight: "bold",}}>Registro app.</Text>
      
      <TextInput style={Layout.inputRegisterDesing} placeholder={'Name'} />
      
      <TextInput style={Layout.inputRegisterDesing} placeholder={'Correo'} />
      
      <TextInput style={Layout.inputRegisterDesing} placeholder={'Contraseña'} />
    </View>
    <View style={{marginTop: 20}}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={Layout.buttonRegisterDesing}>
        <Text style={{color: "white", fontSize: 15, fontWeight: "bold"}} >Registrarse.</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}  