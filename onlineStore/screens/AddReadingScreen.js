import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TextInput } from 'react-native';
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
        <ScrollView>
        </ScrollView>
        </View>
        
      </View>
    </SafeAreaView>
  );
} 