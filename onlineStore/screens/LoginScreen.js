import React, { Component } from 'react'
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Layout from '../constants/Layout'
import { MaterialCommunityIcons, Zocial } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return(
    <SafeAreaView style={Layout.safeArea}>
      <ImageBackground source={require('../assets/images/LoginScreen.jpg')} style={Layout.containerLoginDesing}>
        <Image style={{marginTop:50, borderRadius:200, width:160, height:160}} source={require('../assets/images/Logo.png')} />
        
        <View style={{marginTop: 40}}>
          <Text style={Layout.textLoginDesing} >CORREO</Text>
          
          <View style={{flexDirection:"row"}}>
            <Zocial style={Layout.iconsDesingLogin} name="email" size={20} />
            <TextInput style={Layout.inputLoginDesing} placeholder={'Correo'} />
          </View>

          <Text style={Layout.textLoginDesing} >CONTRASEÑA</Text>

          <View style={{flexDirection:"row"}}>
            <MaterialCommunityIcons style={Layout.iconsDesingLogin} name="textbox-password" size={20} />
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
    </SafeAreaView>
  )
}  