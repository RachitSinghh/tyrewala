import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React,{useRef, useState} from 'react';

import tyre from '../assets/images/tyreBackground/drawable-hdpi/tyrebackground.png';
import CustomInput from '../assets/components/CustomInput';
// Icons

import HeaderPart from './singupScreen/HeaderPart';
import PersonInfo from './singupScreen/PersonInfo';
import BussinessInfo from './singupScreen/BussinessInfo';

const SignUpScreen = ({navigation}) => {

  // const [Name, setName] = useState('');
  // const [PhoneNo, setPhoneNo] = useState('');
  // const [Email, setEmail] = useState('');
  // const [Password, setPassword] = useState('');
  // const [BussinessName, setBussinessName] = useState('')
  // const [ShopAddress, SetShopAddress] = useState('');
  // const [State, setState] = useState('');
  // const [City, setCity] = useState('');
  // const [Pincode, setPincode] = useState('');
  // const [GstNo, setGstNo] = useState('');

  const initialState = {
      name: '',
      PhoneNo: '',
      Email:'',
      Password: '',
      BussinessName: '',
      ShopAddress:'',
      City: '',
      PinCode: '',
      GstNo:'',
  }

const [state, setstate] = useState(initialState);


  const inputRefs = useRef([]);

  const handleOnSubmitEditing = (index) =>{
    if(index < inputRefs.current.length-1){
      inputRefs.current[index+1].focus();
    }else{
      navigation.navigate('OTP')
    }
  }

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Top Header Section */}

        <HeaderPart  />

        {/* Form Section */}

        <PersonInfo inputRefs={inputRefs} handleOnSubmitEditing={handleOnSubmitEditing} />

        {/* Bussiness infoContainer */}
        <BussinessInfo inputRefs={inputRefs} handleOnSubmitEditing={handleOnSubmitEditing}   />

        {/* Create account Section */}

        <View style={styles.loginSection}>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate('OTP')}
          >
            <Text style={styles.login}>CREATE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.SignUpText2}>
              <Text style={styles.SignUpText1}>Already have an account? </Text>
              Sign In {' '}
            </Text>
          </TouchableOpacity>
        </View>

        <Image source={tyre} style={styles.tyreImg} resizeMode='contain' />
      </ScrollView>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#ffffff',
    
  },

  loginSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },

  createButton: {
    backgroundColor: '#46aef7',
    width: 290,
    height: 48,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    marginBottom: 10,
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
  signUp: {
    marginTop: 5,
    marginBottom: 10,
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
  endContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  tyreImg: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems:'center',
    height: "100%",
    width: "50%",
    zIndex: -1,
  },
});
