import React, { Component } from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TapsScreen from './screens/TapsScreen';
import AddReadingScreen from './screens/AddReadingScreen';
import * as context from './database/Context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const userToken = context.token;
  var isSignedIn = false;
  console.log(userToken);

  if (isSignedIn == true) {
    return (  
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
        <Stack.Screen name="TapsScreen" component={TapsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TapsScreen" component={TapsScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AddReading" component={AddReadingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
} 