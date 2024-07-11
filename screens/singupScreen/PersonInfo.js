import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useCallback, useState, useRef} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {DealerSignUp} from '../../assets/images/signUp/SignUpLogo';
import CustomInput from '../../assets/components/CustomInput';

const PersonInfo = ({inputRefs, handleOnSubmitEditing}) => {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handlePickImage = async () => {
    const options = {
      mediaType: 'photos',
    };

    await launchImageLibrary(options, response => {
      // setPickerResponse(response)
      if (response.assets && response.assets.length > 0) {
        setPickerResponse(response);
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  const showImageOptions = () => {
    Alert.alert(
      'Profile Image',
      'Choose an option',
      [
        {
          text: 'Remove Image',
          onPress: () => setProfileImage(null),
          style: 'destructive',
        },
        {
          text: 'Set Profile Picture',
          onPress: handlePickImage,
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };
  // Alert function : `showImageOptions` functions shows an alert with options to remove or change the image
  // -> Remove image: calls "profileImage" to open the image picker again
  // -> change Image: calls "handlePickImage" to open the image picker again
  // -> cancel: dismisses the alert
  //

  return (
    <View style={styles.formSection}>
      <View style={styles.personalInfoContainer}>
        <Text style={styles.personalInfo}>Personal Information</Text>

        <View style={styles.barrier}>
          <View style={styles.hr} />
          <Image
            source={DealerSignUp.plusIcon}
            resizeMode="contain"
            style={styles.plusIcon}
          />
        </View>
      </View>

      {/* Input Container */}
      <View style={styles.textInput_field}>
        <View style={styles.fileUploader}>
          <CustomInput
            icon={DealerSignUp.nameIcon}
            style={styles.CustomInput_style}
            placeholder="Name"
            placeholderTextColor="#888888"
            returnKeyType="next"
            ref={el => (inputRefs.current[0] = el)}
            onSubmitEditing={() => handleOnSubmitEditing(0)}
            blurOnSubmit={false}
          />

          <TouchableOpacity
            style={styles.cameraButton}
            onPress={showImageOptions}>
            {/* showImageOptions fucntion shows the alert when the image or caimamera icon is pressed */}

            <Image
              source={
                profileImage ? {uri: profileImage} : DealerSignUp.cameraIcon
              }
              style={{
                width: '95%',
                height: '100%',
                backgroundColor: 'white',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <CustomInput
            style={styles.remaining_customs}
            icon={DealerSignUp.phoneNo}
            placeholder="Phone No"
            placeholderTextColor="#888888"
            returnKeyType="next"
            ref={el => (inputRefs.current[1] = el)}
            onSubmitEditing={() => handleOnSubmitEditing(1)}
            blurOnSubmit={false}
          />

          <CustomInput
            style={styles.remaining_customs}
            icon={DealerSignUp.emailIcon}
            placeholder="Email Address"
            placeholderTextColor="#888888"
            returnKeyType="next"
            ref={el => (inputRefs.current[2] = el)}
            onSubmitEditing={() => handleOnSubmitEditing(2)}
            blurOnSubmit={false}
          />

          <CustomInput
            style={styles.remaining_customs}
            icon={DealerSignUp.passwordIcon}
            placeholder="Password"
            placeholderTextColor="#888888"
            returnKeyType="next"
            ref={el => (inputRefs.current[3] = el)}
            onSubmitEditing={() => handleOnSubmitEditing(3)}
            blurOnSubmit={false}
          />

          <CustomInput
            style={styles.remaining_customs}
            icon={DealerSignUp.passwordIcon}
            placeholder="Confirm Password"
            placeholderTextColor="#888888"
            returnKeyType="next"
            ref={el => (inputRefs.current[4] = el)}
            onSubmitEditing={() => handleOnSubmitEditing(4)}
            blurOnSubmit={false}
          />
        </View>
      </View>
    </View>
  );
};

export default PersonInfo;

const styles = StyleSheet.create({
  formSection: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  remaining_customs: {
    width: '95%',
    alignItems: 'center',
  },
  CustomInput_style: {
    width: '85%',
  },
  personalInfoContainer: {
    marginBottom: 10,
    justifyContent: 'center',
  },
  personalInfo: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 30,
    marginHorizontal: 15,
  },
  hr: {
    borderBottomColor: '#888888',
    borderBottomWidth: 1,
    width: '92%',
  },
  textInput_field: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  barrier: {
    height: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  plusIcon: {
    width: 30,
    bottom: 2,
  },

  fileUploader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 5,
  },
  cameraButton: {
    height: 50,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
