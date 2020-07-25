import React, { Component } from 'react' 
import { View, Text, ScrollView, SafeAreaView, Modal, TouchableHighlight, Alert, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import { useState, useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { dateTime }  from '../services/DateTimeService';
import { locationService, lectorqrService, handleBarCodeScanned } from '../services/LocationService';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
const { width } = Dimensions.get('window');
const qrSize = width * 0.7;

export default function AddReadingScreen () {  

  //Codigo qr.
  const [modalVisible, setModalVisible] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [codeqr, setCodeqr] = useState('');
  lectorqrService();

  //Time.
  let time = dateTime();

  //Localitation.
  let localization = locationService();

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
            <Text style={{marginHorizontal: 30}}>{time}</Text>
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Localizacion</Text>
            <Text style={{marginHorizontal: 30}}>{localization}</Text>
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Mac</Text>

            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Medida</Text>
            <TextInput placeholder='Ingrese medidia' style={Layout.inputWithoutBorder} />
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Comentario</Text>
            <TextInput placeholder='Ingrese comentario' style={Layout.inputWithoutBorder} />
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Observacion</Text>
            <TextInput placeholder='Ingrese observacion' style={Layout.inputWithoutBorder} />
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Codigo qr.</Text>
            <Text style={{marginHorizontal: 30, fontSize: 15}}>{codeqr}</Text>

          </ScrollView>

          <View style={{alignItems:'flex-end', bottom:30, right:30}}>
              <TouchableOpacity
                style={Layout.floatButton}>
                <MaterialCommunityIcons onPress={() => setModalVisible(true)} name="qrcode-scan" size={50} color="white" />
              </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>

          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFillObject, styles.container]}>
              <Text style={styles.description}>Scan your QR code</Text>
              <Text onPress={() => alert('Navigate back from here')} style={styles.cancel}> Cancel </Text>
              </BarCodeScanner>
              {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
          </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 7,
  },
  qr: {
    marginTop: '20%',
    marginBottom: '20%',
    width: qrSize,
    height: qrSize,
  },
  description: {
    fontSize: width * 0.10,
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
  cancel: {
    fontSize: width * 0.05,
    textAlign: 'center',
    color: 'white',
  },
});
