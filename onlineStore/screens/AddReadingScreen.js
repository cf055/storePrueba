import React, { useState, useEffect } from 'react' // localizacion
import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location'; // localizacion
import TimeEjemplo from '../Services/ejemplo';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { dateTime }  from '../Services/DateTimeService';

export default function AddReadingScreen () {  
  const [location, setLocation] = useState(null); // localizacion
  const [errorMsg, setErrorMsg] = useState(null); // localizacion
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // localizacion todo esto
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      const { status2 } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

      //.timestamp para hora
      let location = (await Location.getCurrentPositionAsync({})).coords;
      setLocation(location);
    });
  });
  
  // localizacion
  let coords = 'Waiting..';
  let time = dateTime();

  // localizacion devolver if
  if (errorMsg) {
    coords = errorMsg;
  } else if (location) {
    coords = location.latitude + ' / ' + location.longitude;
  }

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
            <Text>{ time }</Text>
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Localizacion</Text>
            <Text>{coords}</Text>
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Mac</Text>

            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Medida</Text>
            <TextInput placeholder='Ingrese medidia' style={Layout.inputWithoutBorder} />
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Comentario</Text>
            <TextInput placeholder='Ingrese comentario' style={Layout.inputWithoutBorder} />
            <Text style={{marginHorizontal: 30, color: "#a2a5a4", margin: 10}}>Observacion</Text>
            <TextInput placeholder='Ingrese observacion' style={Layout.inputWithoutBorder} />

          </ScrollView>

          <View style={{alignItems:'flex-end', bottom:30, right:30}}>
              <TouchableOpacity
                style={Layout.floatButton}>
                <MaterialCommunityIcons onPress={() => console.log('scanea aqui')} name="qrcode-scan" size={50} color="white" />
              </TouchableOpacity>
              <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>

        </View>

      </View>
    </SafeAreaView>
  );
} 
