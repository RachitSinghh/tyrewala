import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
// Screens

import IntroScreen from './screens/IntroScreen';
// import UserProfileEdit from './screens/userProfile/sections/UserProfileEdit';
import AppNavigation from './navigation/appNavigation';
import {NavigationContainer} from '@react-navigation/native';
// import CustomInput from './assets/components/CustomInput';

const App = ({navigation}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true); // sometimes it takes time to start the app this function will give enough to time load the app while it stays on the before the login screen
  }, 2000);

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoaded ? <AppNavigation /> : <IntroScreen />}

      {/* <SignUpScreen /> */}
    </SafeAreaView>
  );
};

export default App;
