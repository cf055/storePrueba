import React, { Component, useState, useEffect} from 'react'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import TapsScreen from './screens/TapsScreen';
import AddReadingScreen from './screens/AddReadingScreen';
import * as context from './database/ContextId'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

export default function App () {
  const userToken = context.idUser;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {userToken == '' ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="AddReading" component={AddReadingScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer> 
    //<ContextId.Provider value="green">
    /*<NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AddReading" component={AddReadingScreen} />
        <Stack.Screen 
        name="TapsScreen" 
        component={TapsScreen} 
        options={{
          title: 'tap',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>*/
    //</ContextId.Provider>
  );
} 