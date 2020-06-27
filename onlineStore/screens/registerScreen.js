import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, Button, TouchableOpacity  } from 'react-native';
import Layout from '../constants/Layout'

export default function RegisterScreen({ navigation }) {
  return(
    <View style={Layout.containerRegisterDesing}>
    <View style={{marginTop: 60}}>
      <Text style={Layout.textLoginDesing} >Name</Text>
      <TextInput style={Layout.inputRegisterDesing} placeholder={'Name'} />
      <Text style={Layout.textLoginDesing} >Email</Text>
      <TextInput style={Layout.inputRegisterDesing} placeholder={'Correo'} />
      <Text style={Layout.textLoginDesing} >Password</Text>
      <TextInput style={Layout.inputRegisterDesing} placeholder={'Contraseña'} />
    </View>
    <View style={{marginTop: 40}}>
    <TouchableOpacity onPress={() => alert('redireccionar a la pagina home')} style={Layout.buttonRegisterDesing}>
        <Text>Ingresar.</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={Layout.buttonRegisterDesing}>
        <Text>Registrarse.</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}  