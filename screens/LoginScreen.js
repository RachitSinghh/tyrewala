import {Text, View, Image, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';

import logo from '../assets/images/Logo/drawable-hdpi/logo.png';
import tyre from '../assets/images/tyreBackground/drawable-hdpi/tyrebackground.png';
import fadeLine from '../assets/images/HR-lining/drawable-xhdpi/fade_line.png';

// Icons
import emailIcon from '../assets/images/loginScreenIcons/drawable-hdpi/email_icon.png';
import phoneIcon from '../assets/images/loginScreenIcons/drawable-hdpi/phone_no.png';
import passwordIcon from '../assets/images/loginScreenIcons/drawable-hdpi/password.png';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
    
      
      <View style={styles.introContainer}>
        <Image source={logo} style={styles.imgLogo} />
        <Text style={styles.introText}>Welcome Back</Text>
        <Text style={styles.subHeading}>Log into your existing account of Tyrewala</Text>
      </View>
      <View style={styles.inforContainer}>
        <Image source={emailIcon} style={styles.icon} />
        <TextInput
          style={styles.inputContainer}
          placeholder='Email Address'
        />
      </View>

      <View style={styles.breaker}>
        <Image source={fadeLine} style={styles.breakerLine} />
        <Text style={styles.breakerText}>OR</Text>
      </View>

      <View style={styles.inforContainer}>
        <Image source={phoneIcon} style={styles.icon} />
        <TextInput
          style={styles.inputContainer}
          placeholder='Phone No.'
          inputMode='numeric'
        />
      </View>
      <View style={styles.inforContainer}>
        <Image source={passwordIcon} style={styles.icon} />
        <TextInput
          style={styles.inputContainer}
          placeholder='Password'
          
        />
      </View>

      <View style={styles.loginSection}>
      <TouchableOpacity 
      style={styles.loginContainer}
      // onPress={() => navigation.navigate('OTP')}
      >
        <Text style={styles.login}>LOG IN</Text>  
      </TouchableOpacity>
      </View>
  
      <View style={styles.signUpSection}>
        <Text style={styles.SignUpText1}>Don't have an accout? </Text>
        <TouchableOpacity>
          <Text style={styles.SignUpText2}>Sign Up</Text>
        </TouchableOpacity>
      </View>

        <Image 
          source={tyre}
          style={styles.tyreImg}
        />
  
    </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  introContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  }, 
  introText:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
  },
  subHeading:{
    color: '#888888',
    fontSize: 15,
    marginTop:5
  },
  inforContainer:{
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius:50,
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 20,
    borderColor: '#eeeded',
    borderWidth:2,
    borderColor: '#eeeded'
  },
  icon:{
    left: 20,
  },
  inputContainer:{
    left: 30,
    fontSize: 20,
    color: '#888888'
  },
  breaker:{
    flexDirection: 'row',
    position: 'relative',
    padding: 25,
    justifyContent: 'center', 
    margin: 10,
  },
  breakerLine: {
    width: 300,
    alignContent: 'center'
  },
  breakerText:{
    position: 'absolute',
    justifyContent: 'center',
    fontSize: 30,
    color: '#888888',
  },
  tyreImg:{
    position: 'absolute',
    bottom: 10,
    zIndex: -1
  },
  loginSection:{
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginContainer:{
    backgroundColor: '#46aef7',
    width: 290,
    height: 48,
    flexDirection: 'row',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',   
    margin:10,
  },
  login:{ 
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
    bottom: 0
  },
  signUpSection:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  SignUpText1:{
    fontSize: 20,
    fontWeight: '400',
    color: '#010000'
  },
  SignUpText2:{
    fontSize: 20,
    color: '#46aef7',
    fontWeight: '500',
  }

});
