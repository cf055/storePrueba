import React, { Component, useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import { AntDesign } from '@expo/vector-icons';
import { Firebase } from '../database/configFirebase';
import * as context from '../database/Context';
import { GetStoreData } from '../database/LocalStorage';
import { DeleteData } from '../database/LocalStorage';

export default function AccountScreen({ navigation }) {

  return (
    <ActivateButton navigation={navigation} />
  );
}

function ActivateButton({ navigation }) {

  const [showInput, setShowInput] = useState(false);

  const logOut = () => {
    Firebase.auth().signOut()
      .then(() => {
        DeleteData();
        navigation.popToTop()
      })
      .catch((error => alert(error)));
  };

  useEffect(() => {
    GetStoreData();
    (async () => {
      setShowInput(false);
    })();
  }, []);

  const textEjemplo = 'Ejemplo text.';
  return (
    <SafeAreaView style={Layout.safeArea}>
      <View style={{ flex: 1 }}>
        <View style={styles.container2}>
          <View style={{ flex: 0.3 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ color: "white", fontSize: 25 }}>{context.IdUserEjemplo}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={{ borderRadius: 150, width: 100, height: 100, marginHorizontal: 20 }} source={require('../assets/images/Logo.png')} />
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={{ marginHorizontal: 20, color: "white" }}>{context.User.name}</Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: 20 }}>
              <AntDesign onPress={() => setShowInput(true)} name="edit" size={30} color="white" />
            </View>
          </View>
        </View>
        <View style={{ flex: 3, alignItems: 'stretch', backgroundColor: 'white' }}>
          <ScrollView style={styles.scrollView}>
            <Text style={{ marginHorizontal: 20, padding: 10 }}>Datos usuario</Text>
            <View style={{ alignItems: 'stretch' }}>
              <Text style={{ marginHorizontal: 30, color: "#a2a5a4", margin: 10 }}>Numero de cedula</Text>
              <TextInput value={context.User.cedula} editable={showInput} style={[Layout.inputWithoutBorder, { borderBottomColor: showInput ? 'blue' : 'red' }]} />
              <Text style={{ marginHorizontal: 30, color: "#a2a5a4", margin: 10 }}>Numero MAC</Text>
              <TextInput editable={showInput} style={[Layout.inputWithoutBorder, { borderBottomColor: showInput ? 'blue' : 'red' }]} />
              <Text style={{ marginHorizontal: 30, color: "#a2a5a4", margin: 10 }}>Email</Text>
              <TextInput editable={showInput} style={[Layout.inputWithoutBorder, { borderBottomColor: showInput ? 'blue' : 'red' }]} />
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          {showInput && <TouchableOpacity onPress={() => setShowInput(false)} style={Layout.buttonDesing}>
            <Text style={Layout.textButtonDesing} >Guardar</Text>
          </TouchableOpacity>}
          <TouchableOpacity onPress={logOut} style={Layout.buttonDesing}>
            <Text style={Layout.textButtonDesing} >Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'white',

  },
  container2: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: "#5fb1fa"
  }
});