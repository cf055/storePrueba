import React, { Component, useState, useEffect } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
import Layout from '../constants/Layout'
import { MaterialCommunityIcons, Zocial } from '@expo/vector-icons';
import * as context from '../database/Context';
import { Entypo } from '@expo/vector-icons';
import { Firebase, db } from '../database/configFirebase';
import { useSafeArea } from 'react-native-safe-area-context';
import { StoreData  } from '../database/LocalStorage';

export default function LoginScreen({ navigation }) {

  const insets = useSafeArea();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [iconShow, setIconShow] = useState('eye');
  const [showPassword, setShowPassword] = useState(true);
  
  const changeIcon = () => {
    if (iconShow == 'eye') {
      setIconShow('eye-with-line');
      setShowPassword(false);
    }
    if (iconShow == 'eye-with-line') {
      setIconShow('eye');
      setShowPassword(true);
    }
  };

  useEffect(() => {
    
      setUserName('');
      setPassword('');
    
  }, []);
  
  return(
    //<ContextId.Provider value="blue">
    <SafeAreaView style={Layout.safeArea}>
      <View style={Layout.containerDesing}>
        <Image style={{marginTop:10, borderRadius:200, width:160, height:160}} source={require('../assets/images/Logo.png')} />
        <Text style={{fontSize: 25, textAlign: 'center', fontWeight: "bold",}}>Login app</Text>

        <View style={{marginTop: 15}}>

          <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight: "bold"}} >CORREO</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <Zocial style={Layout.iconsDesingLogin} name="email" size={20} />
            <TextInput value={username} onChangeText={text => setUserName(text)} style={Layout.inputBorderDesing} placeholder={'Correo'} />
          </View>

          <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight: "bold",}} >CONTRASEÑA</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <MaterialCommunityIcons style={Layout.iconsDesingLogin} name="textbox-password" size={20} />
            <TextInput secureTextEntry={showPassword} value={password} onChangeText={text => setPassword(text)} style={Layout.inputBorderDesing} placeholder={'Contraseña'} />
            <Entypo name={iconShow} style={Layout.iconsDesingLogin2} size={24} onPress={changeIcon} />
          </View>
        </View>

        <View style={{marginTop: 5}}>
          <TouchableOpacity 
            onPress={() => singIn(navigation, Firebase, username, password)}
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
    //</ContextId.Provider>
  )
}  

function singIn(navigation, Firebase, username, password){ 
  setTimeout(() => {
    Firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        var user = Firebase.auth().currentUser;
          //console.log(user);
          if (user != null) {
            context.IdUser = user.uid;
            db.collection("userData").doc(user.uid).get()
          .then((h) => {
            context.User = h.data();
            const UserDataJson = {
              id: context.IdUser,
              user: context.User
            }
            StoreData(UserDataJson);
          })
          .catch((error => alert(error)));
          navigation.navigate('TapsScreen')
          } else {
            //verificar este if 
            console.log("error");
          }  
      })
      .catch((error => alert(error)));
  }, 1000); 
}