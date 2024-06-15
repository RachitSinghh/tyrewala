import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// navigation

import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';

const Stack = createNativeStackNavigator();

const appNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OtpScreen} />
        </Stack.Navigator>  
    </NavigationContainer>
  )
}

export default appNavigation

const styles = StyleSheet.create({})