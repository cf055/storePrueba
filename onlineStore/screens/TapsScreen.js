import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

export default function TapsScreen () {
  return(
    <Tab.Navigator 
      initialRouteName={'Home'}
      tabBarOptions={{
      activeTintColor: '#5664af',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon focused={focused} color={color} size={size} name="ios-folder" />
            ),
          }}
        />
        <Tab.Screen 
          name="Account" 
          component={AccountScreen} 
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size, focused }) => (
              <TabBarIcon focused={focused} color={color} size={size} name="ios-contact" />
            ),
        }}/>
    </Tab.Navigator>
  )
}