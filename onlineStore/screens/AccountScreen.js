import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TextInput  } from 'react-native';
import Layout from '../constants/Layout';
import { AntDesign } from '@expo/vector-icons'; 

export default function AccountScreen () {
  return (
    <SafeAreaView style={Layout.safeArea}>
      <View style={{flex:1}}>
        <View style={styles.container2}>
        <View style={{flex: 0.5}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: "white", fontSize: 20}}>Settings.</Text>
          </View>
        </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image style={{borderRadius:150, width:70, height:70, marginHorizontal: 20}} source={require('../assets/images/Logo.png')} />
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
              <Text style={{marginHorizontal: 20, color: "white"}}>NombreUsuario</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center',  marginHorizontal: 20}}>
            <AntDesign onPress={() => console.log('Ask me later')} name="edit" size={24} color="white" />
            </View>
          </View>
        </View>
        <View style={{flex:3, alignItems: 'stretch'}}>
          <ScrollView style={styles.scrollView}>
            <Text style={{marginHorizontal: 20, padding: 10}}>Datos usuario</Text>
          <View style={{alignItems: 'stretch'}}>
            <Text style={{color:"#5664af", marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Numero de cedula</Text>
            <TextInput style={styles.input2}/>
            <Text style={{color:"#5664af", marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Numero MAC</Text>
            <TextInput style={styles.input2} />
            <Text style={{color:"#5664af", marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Correo</Text>
            <TextInput style={styles.input2} />
          </View>
        </ScrollView>
        </View>
        
      </View>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
    
  },
  container2: {
    flex:1.5, 
    flexDirection: 'column', 
    justifyContent: 'center', 
    backgroundColor: "#5fb1fa"

  }, 
  input2: {
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    borderBottomColor: "#a2a5a4",
    padding: 10,
    marginHorizontal: 30
  }
});