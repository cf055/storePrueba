import React, { Component } from 'react'
import { View, Text, TextInput, Image, SafeAreaView , TouchableOpacity  } from 'react-native';
import Layout from '../constants/Layout'

export default function RegisterScreen({ navigation }) {
  
  return(

  <SafeAreaView style={Layout.safeArea}>
    <View style={Layout.containerDesing}>
      <Image style={{marginTop:10, borderRadius:200, width:160, height:160}} source={require('../assets/images/Logo.png')} />
      <Text style={{fontSize: 25, textAlign: 'center', fontWeight: "bold",}}>Registro app</Text>
      <TextInput style={Layout.inputBorderDesing} placeholder={'Name'} />
      <TextInput style={Layout.inputBorderDesing} placeholder={'Correo'} />
      <TextInput style={Layout.inputBorderDesing} placeholder={'Contraseña'} />
      <TouchableOpacity  onPress={() => navigation.navigate('Login')}  style={Layout.buttonDesing}>
        <Text style={Layout.textButtonDesing} >Registrarse</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
} 