import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useCallback, useState} from 'react';

import {DealerSignUp} from '../../assets/images/signUp/SignUpLogo';
import HorizontalLine from '../../assets/components/horizontalLine';
import CustomInput from '../../assets/components/CustomInput';
 


const BussinessInfo = ({inputRefs,handleOnSubmitEditing}) => {

 




  return (
    <View style={styles.container}>
      {/* Bussiness infoContainer */}

      <View style={styles.second_container}>
        <Text style={styles.heading2}>Bussiness Information</Text>

        <View style={styles.barrier}>
          <HorizontalLine style={styles.hr} />
          <Image
            source={DealerSignUp.minusIcon}
            resizeMode="contain"
            style={styles.minusIcon}
          />
        </View>
      </View>

      {/* form field */}

      <View style={styles.DealersBussiness}>
        <CustomInput
          style={styles.inputContainer}
          icon={DealerSignUp.businessName}
          placeholder="Bussiness Name"
          placeholderTextColor = '#888888'
          returnKeyType="next"
          ref={el => (inputRefs.current[5] = el)}
          onSubmitEditing={() => handleOnSubmitEditing(5)}
          blurOnSubmit={false}
        />

        <CustomInput
          style={styles.inputContainer}
          icon={DealerSignUp.shopIcon}
          placeholder="Shop Address "
          placeholderTextColor = '#888888'
          returnKeyType="next"
          ref={el => (inputRefs.current[6] = el)}
          onSubmitEditing={() => handleOnSubmitEditing(6)}
          blurOnSubmit={false}
        />
      </View>

      {/* city detail container  */}

      <View style={styles.cityInfo}>
        <CustomInput
          style={styles.cityInfoTextContainer}
          icon={DealerSignUp.stateIcon}
          placeholder="State"
          placeholderTextColor = '#888888'
          returnKeyType="next"
          ref={el => (inputRefs.current[7] = el)}
          onSubmitEditing={() => handleOnSubmitEditing(7)}
          blurOnSubmit={false}
          iconStyle={{height: 40, width: 20,marginLeft: 10}}
        />

        <CustomInput
          style={styles.cityInfoTextContainer}
          icon={DealerSignUp.cityIcon}
          placeholder="City"
          placeholderTextColor = '#888888'
          returnKeyType="next"
          ref={el => (inputRefs.current[8] = el)}
          onSubmitEditing={() => handleOnSubmitEditing(8)}
          blurOnSubmit={false}
          iconStyle={{height: 40, width: 20,marginLeft: 10}}
        />

        <CustomInput
          style={styles.cityInfoTextContainer}
          icon={DealerSignUp.pincodeIcon}
          placeholder="Pincode"
          placeholderTextColor = '#888888'
          inputMode="numeric"
          returnKeyType="next"
          ref={el => (inputRefs.current[9] = el)}
          onSubmitEditing={() => handleOnSubmitEditing(9)}
          blurOnSubmit={false}
          iconStyle={{height: 40, width: 15, marginLeft: 10}}
        />
      </View>

      <View style={styles.endContainer}>
        <CustomInput
          icon={DealerSignUp.gstIcon}
          style={styles.lastContainer}
          placeholder="GST NO."
          placeholderTextColor = '#888888'
          inputMode="numeric"
          returnKeyType="next"
          ref={el => (inputRefs.current[10] = el)}
          onSubmitEditing={() => handleOnSubmitEditing(10)}
          blurOnSubmit={false}
          iconStyle={{height: 25, width: 25}}
        />

        <CustomInput
          icon={DealerSignUp.panIcon}
          style={styles.lastContainer}
          placeholder="PAN NO."
          placeholderTextColor = '#888888'
          inputMode="numeric"
          ref={el => (inputRefs.current[11] = el)}
          onSubmitEditing={() => handleOnSubmitEditing(11)}
          blurOnSubmit={false}
          iconStyle={{height: 25, width: 25}}
        />
      </View>
    </View>
  );
};

export default BussinessInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  second_container: {
    marginBottom: 10,
    justifyContent: 'center',
  },
  heading2: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 30,
    marginHorizontal: 15,
  },

  hr: {
    borderBottomColor: '#888888',
    borderBottomWidth: 1,
    width: "92%",
  },
  barrier: {
    height: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  minusIcon: {
    width: 30,
    bottom: 2,
  },

  // Form field

  DealersBussiness: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cityInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  icon: {
    left: 24,
    height: 24,
    width: 24,
  },
  inputContainer: {
    width: '95%',
  },

  // Dealers City Details\

  cityInfo: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  cityInfoTextContainer: {
    width: 120,
    fontSize: 16,
    paddingHorizontal: 5,
  },

  endContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  lastContainer: {
    width: '42%',
  },
});
