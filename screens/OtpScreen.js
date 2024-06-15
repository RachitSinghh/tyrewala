import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import phoneIcon from '../assets/images/phone_icon.png';

const OtpScreen = ({navigation}) => {

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 40

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Image source={phoneIcon} style={styles.phoneIcon} />
          <Text style={styles.mainText}>
            Login / Registration with Mobile Number
          </Text>
          <Text style={styles.paragraph}>
            Enter your mobile number we will sent you{' '}
            <Text style={styles.otp}>One Time Password</Text> to verify
          </Text>
          <KeyboardAvoidingView
            style={styles.textInputHolder}>
            <TextInput
              placeholder="Enter Mobile Number"
              style={styles.mobileNo}
            />
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.thirdContainer}>
          <Text style={styles.sendOTP}>SEND OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'space-evenly',
  },
  secondContainer: {
    flexDirection: 'column',
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '45%',
  },
  phoneIcon: {
    padding: 10,
    left: '11%',
    marginBottom: 30,
  },
  mainText: {
    marginTop: 25,
    fontSize: 21,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 30,
  },
  paragraph: {
    fontSize: 21,
    textAlign: 'center',
    padding: 24,
    color: '#616161',
    marginBottom: 30,
  },
  otp: {
    color: 'black',
    fontWeight: '450',
  },
  textInputHolder: {
    width: '80%',
    borderRadius: 20,
    marginHorizontal: 20,
    justifyContent:'center',
    alignItems: 'center',
    borderColor: '#eeeded',
    borderWidth: 2,
    borderColor: '#eeeded',
  },
  mobileNo: {
    color: '#000000',
    fontSize: 25,
  },
  thirdContainer: {
    backgroundColor: '#2e9ac8',
    flexDirection: 'row',
    marginRight: 90,
    marginLeft: 90,
    justifyContent: 'center',
    borderRadius: 100,
    alignItems: 'center',
     
  },
  sendOTP: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
