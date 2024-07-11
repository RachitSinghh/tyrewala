import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {otpScreen} from '../assets/images/OTPScreen/OTPscreen';




const OtpScreen = ({navigation}) => {


  return (
   <ScrollView style={styles.container}>
    <View style={styles.upperContainer}>
      <Image
         style={styles.phone}
        source={otpScreen.phoneIcon}
        resizeMode='contain'
      />
      <Text>Hello</Text>
    </View>

   </ScrollView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1, 
  }, 
  upperContainer:{
    backgroundColor: 'blue',
    height: '100%',
    alignItems: 'center'
  },
  phone:{
    width: 250
  }
});
