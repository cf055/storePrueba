import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Icon } from 'react-native';
import Layout from '../constants/Layout';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AddReadingScreen () {
  return (
    <SafeAreaView style={Layout.safeArea}>
      <View style={{flex: 1}}>
        <View style={Layout.viewTitle}>
          <View style={{ justifyContent: 'center'}}>
            <Text style={{color: "white", fontSize: 25}}>Añadir Scann</Text>
          </View>
        </View>

        <View style={{flex:3, backgroundColor:'white'}}>
          <ScrollView>
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Id Medidor</Text>
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Fecha - Hora</Text>
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Localizacion</Text>
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Mac</Text>

            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Medida</Text>
            <TextInput placeholder='Ingrese medidia' style={styles.input2} />
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Comentario</Text>
            <TextInput placeholder='Ingrese comentario' style={styles.input2} />
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Observacion</Text>
            <TextInput placeholder='Ingrese observacion' style={styles.input2} />

          </ScrollView>

          <View style={{alignItems:'flex-end', bottom:30, right:30}}>
              <TouchableOpacity
                style={Layout.floatButton}>
                <MaterialCommunityIcons onPress={() => console.log('scanea aqui')} name="qrcode-scan" size={50} color="white" />
              </TouchableOpacity>
            </View>

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
    borderBottomColor: "green",
    padding: 10,
    marginHorizontal: 30
  }
});