import React, { Component } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Layout from '../constants/Layout'
import { MaterialCommunityIcons, Zocial } from '@expo/vector-icons';
import { useSafeArea } from 'react-native-safe-area-context';

export default function LoginScreen({ navigation }) {
  const insets = useSafeArea();
  return(
    <SafeAreaView style={{paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1}}>
      <View style={Layout.containerDesing}>
      <Image style={{marginTop:50, borderRadius:200, width:160, height:160}} source={require('../assets/images/Logo.png')} />
        
        <View style={{marginTop: 40}}>
          <Text style={{fontWeight: "bold"}} >CORREO</Text>
          
          <View style={{flexDirection:"row"}}>
            <Zocial style={Layout.iconsDesingLogin} name="email" size={20} />
            <TextInput style={Layout.inputDesing} placeholder={'Correo'} />
          </View>

          <Text style={{fontWeight: "bold",}} >CONTRASEÑA</Text>

          <View style={{flexDirection:"row"}}>
            <MaterialCommunityIcons style={Layout.iconsDesingLogin} name="textbox-password" size={20} />
            <TextInput style={Layout.inputDesing} placeholder={'Contraseña'} />
          </View>

        </View>
      
        <View style={{marginTop: 40}}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('TapsScreen')} 
            style={Layout.buttonDesing}>
            
            <Text style={Layout.textButtonDesing}>Ingresar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => navigation.navigate('Register')}
            style={Layout.buttonDesing}>
            
            <Text style={Layout.textButtonDesing}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}  