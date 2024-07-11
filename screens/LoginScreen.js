import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';

import logo from '../assets/images/Logo/drawable-hdpi/logo.png';
import tyre from '../assets/images/tyreBackground/drawable-hdpi/tyrebackground.png';
import fadeLine from '../assets/images/HR-lining/drawable-xhdpi/fade_line.png';

// Icons
import CustomInput from '../assets/components/CustomInput';
import {DealerLogin} from '../assets/images/DealerLogin/DealerLogin';
import ScreenWrapper from '../assets/components/ScreenWrapper';


const LoginScreen = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [PhoneNO, setPhoneNo] = useState('');
  const [Password, setPassword] = useState('');
  
  const inputRefs = useRef([])

  const handleSubmit = (index) =>{
    if(index < inputRefs.current.length-1){
      inputRefs.current[index+1].focus();
    }else{
      handleLogin();
    }
  }

  const handleLogin = () =>{
    if(Email && PhoneNO && Password){
      navigation.navigate('Home');
    }else{
      Alert.alert('Please fill in the Required fields')
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
          <View style={styles.introContainer}>
            <Image source={logo} style={styles.imgLogo} />
            <Text style={styles.introText}>Welcome Back</Text>
            <Text style={styles.subHeading}>
              Log into your existing account of Tyrewala
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <CustomInput
              icon={DealerLogin.emailIcon}
              style={styles.customInput_style}
              placeholder="Enter Email"
              placeholderTextColor = '#888888'
              value={Email}
              onChangeText={setEmail}
              keyboardType="email-address"
              returnKeyType='next'
              ref={(el) => inputRefs.current[0] = el}
              onSubmitEditing = {() => handleSubmit(0)}
              blurOnSubmit={false}

            />
          </View>

          <View style={styles.breaker}>
            <Image source={fadeLine} style={styles.breakerLine} />
            <Text style={styles.breakerText}>OR</Text>
          </View>

          <View style={styles.infoContainer}>
            <CustomInput
              icon={DealerLogin.phoneIocn}
              placeholder="Phone No."
              placeholderTextColor = '#888888'
              value={PhoneNO}
              onChangeText={setPhoneNo}
              keyboardType='numeric'
              returnKeyType='next'
              ref={(el) => inputRefs.current[1] = el}
              onSubmitEditing = {() => handleSubmit(1)}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.infoContainer}>
            <CustomInput
              icon={DealerLogin.passwordIcon}
              placeholder="Password"
              placeholderTextColor = '#888888'
              value={Password}
              onChangeText={setPassword}
              secureTextEntry
              returnKeyType='next'
              ref={(el) => inputRefs.current[2] = el}
              onSubmitEditing = {() => handleSubmit(2)}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.loginSection}>
            <TouchableOpacity
              style={styles.loginContainer}
              onPress={() => handleLogin()}>
              <Text style={styles.login}>LOG IN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signUpSection}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.SignUpText2}>
                <Text style={styles.SignUpText1}>Don't have an accout? </Text>
                Sign Up{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <Image source={tyre} style={styles.tyreImg} resizeMode="contain" />
          {/* <BackgroundImage  /> */}
     
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  },
  introContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  introText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  subHeading: {
    color: '#888888',
    fontSize: 15,
    marginTop: 5,
  },
  customInput_style: {
    color: 'black'
  },
  infoContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },

  breaker: {
    flexDirection: 'row',
    position: 'relative',
    padding: 25,
    justifyContent: 'center',
    margin: 10,
  },
  breakerLine: {
    width: 300,
    alignContent: 'center',
  },
  breakerText: {
    position: 'absolute',
    justifyContent: 'center',
    fontSize: 30,
    color: '#888888',
  },

  tyreImg: {
    height: '100%',
    width: '60%',
    zIndex: -1,
    
    position: 'absolute'
  },
  loginSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginContainer: {
    backgroundColor: '#46aef7',
    width: 290,
    height: 48,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  login: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
    bottom: 0,
  },
  signUpSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  SignUpText1: {
    fontSize: 20,
    fontWeight: '400',
    color: '#010000',
  },
  SignUpText2: {
    fontSize: 20,
    color: '#46aef7',
    fontWeight: '500',
  },
});
