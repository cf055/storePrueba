import React, { Component, useState, useEffect } from 'react'
import { View, Text, TextInput, Image, SafeAreaView , TouchableOpacity  } from 'react-native';
import Layout from '../constants/Layout';
import { Firebase } from '../database/configFirebase'
import { Entypo } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    (async () => {
      setEmail('');
      setPassword('');
      setPassword2('');
    })();
  }, []);

  const confirmPassword = () => {
    if (password == password2) {
      Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Login'))
      .catch((error => alert(error))); 
    }
    else {
      alert("Password incorrectos.");
    }
  };

  return(
  <SafeAreaView style={Layout.safeArea}>
    <View style={Layout.containerDesing}>
      <Image style={{marginTop:10, borderRadius:200, width:160, height:160}} source={require('../assets/images/Logo.png')} />
      <Text style={{fontSize: 25, textAlign: 'center', fontWeight: "bold",}}>Registro app</Text>
      <TextInput value={email} onChangeText={text => setEmail(text)} style={Layout.inputBorderDesing} placeholder={'Email'} />
      <TextInput secureTextEntry={true} value={password} onChangeText={text => setPassword(text)} style={Layout.inputBorderDesing} placeholder={'Contraseña'} />
      <TextInput secureTextEntry={true} value={password2} onChangeText={text => setPassword2(text)} style={Layout.inputBorderDesing} placeholder={'Confirmar contraseña'} />
      <TouchableOpacity  onPress={confirmPassword}  style={Layout.buttonDesing}>
        <Text style={Layout.textButtonDesing} >Registrarse</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
} 