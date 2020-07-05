import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput } from 'react-native';
import Layout from '../constants/Layout';

export default function AddReadingScreen () {
  return (
    <SafeAreaView style={Layout.safeArea}>
      <View style={{flex: 1}}>
        <View style={Layout.viewTitle}>
          <View style={{ justifyContent: 'center'}}>
            <Text style={{color: "white", fontSize: 25}}>Añadir Scann</Text>
          </View>
        </View>

        <View style={{flex:3, alignItems: 'stretch'}}>
          <ScrollView style={{backgroundColor:'white'}}>
            <Text style={{color:"#5664af", marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Id Medidor</Text>
            <Text style={{color:"#5664af", marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Fecha - Hora</Text>
            <Text style={{color:"#5664af", marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Localizacion</Text>
            <Text style={{color:"#5664af", marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Mac</Text>

            <Text style={{color:"#5664af", marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Medida</Text>
            <TextInput style={styles.input2} />
            <Text style={{color:"#5664af", marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Comentario</Text>
            <TextInput style={styles.input2} />
            <Text style={{color:"#5664af", marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Observacion</Text>
            <TextInput style={styles.input2} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({ 
  input2: {
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    borderBottomColor: "#a2a5a4",
    padding: 10,
    marginHorizontal: 30
  }
});