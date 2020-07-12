import React, { useState, useEffect } from 'react' // localizacion
import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as Location from 'expo-location'; // localizacion
import TimeEjemplo from '../Services/ejemplo';

export default function AddReadingScreen () {  
  const [location, setLocation] = useState(null); // localizacion
  const [errorMsg, setErrorMsg] = useState(null); // localizacion

  // localizacion todo esto
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      //.timestamp para hora
      let location = (await Location.getCurrentPositionAsync({})).coords;
      setLocation(location);
    })();
  });
  
  // localizacion
  let coords = 'Waiting..';
  
  // fecha y hora
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1; 
  var year = new Date().getFullYear();
  var hours = new Date().getHours(); 
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();

  // localizacion devolver if
  if (errorMsg) {
    coords = errorMsg;
  } else if (location) {
    coords = location.latitude + ' / ' + location.longitude;
  }

  let timeText = date + '/' +  month + '/' + year + ' ' + hours + ':' + min + ':' + sec;

  return (
    <TimeEjemplo value={timeText} value2={coords} />

  );
} 

