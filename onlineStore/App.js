import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import RegisterScreen from './screens/registerScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

class App extends Component{
  render(){
    return(
      /*<NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>*/
      
      <RegisterScreen/>

      /*<View>
      <View style={styles.container}>
        <Text>Ejemplo</Text>
      </View>
      <View style={styles.container}>
        <Text>Ejemplo</Text>
      </View>
      <View style={styles.container}>
        <Text>Ejemplo.</Text>
      </View>
      </View>*/
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default App

/*import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import RegisterScreen from './screens/registerScrren';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});*/
