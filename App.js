import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginScreen from './screens/LoginScreen'
import IntroScreen from './screens/IntroScreen';
import OtpScreen from './screens/OtpScreen';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
      setIsLoaded(true) // sometimes it takes time to start the app this function will give enough to time load the app while it stays on the before the login screen
  }, 2000);
  return (
  <View>
   {isLoaded ? <OtpScreen /> : <IntroScreen />}
   {/* <IntroScreen /> */}
  </View>
  )
}

export default App

const styles = StyleSheet.create({})