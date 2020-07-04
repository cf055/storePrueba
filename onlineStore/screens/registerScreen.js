import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, SafeAreaView , TouchableOpacity  } from 'react-native';
import Layout from '../constants/Layout'

export default function RegisterScreen({ navigation }) {
  
  return(

  <SafeAreaView style={Layout.safeArea}>
    <View style={Layout.containerDesing}>
      <View style={{flex:2, justifyContent: 'center'}}>
        <Image style={{borderRadius:150, alignItems: 'center', width:100, height:100}} source={require('../assets/images/Logo.png')} />
      </View>
      <View style={{flex:3}}>
      <Text style={{fontSize: 25, textAlign: 'center', color:'#5664af', fontWeight: "bold",}}>Registro app.</Text>
      
      <TextInput style={Layout.inputRegisterDesing} placeholder={'Name'} />
      
      <TextInput style={Layout.inputRegisterDesing} placeholder={'Correo'} />
      
      <TextInput style={Layout.inputRegisterDesing} placeholder={'Contraseña'} />

      <TouchableOpacity  onPress={() => navigation.navigate('Login')}  style={Layout.buttonDesing}>
        <Text style={{color: "white", fontSize: 15, fontWeight: "bold"}} >Registrarse.</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
      </View>
    </View>
  </SafeAreaView>
  )
}  