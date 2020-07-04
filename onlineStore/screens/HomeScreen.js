import React, { Component } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout'

export default function HomeScreen() {
  return(
    <SafeAreaView style={Layout.safeArea}>
      <View style={Layout.containerDesing}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity  onPress={() => navigation.navigate('Login')}  style={Layout.buttonDesing}>
            <Text style={Layout.textButtonDesing} >Historial  </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('Login')}  style={Layout.buttonDesing}>
            <Text style={Layout.textButtonDesing} >Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}  