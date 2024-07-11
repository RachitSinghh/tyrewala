import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {UserProfileIcons} from '../../../assets/images/ProfileDetailScreen/userProfileIcons';

const BusinessProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Business Profile</Text>

      <View style={styles.form_container}>
        <View style={styles.form}>
          <Image
            source={UserProfileIcons.bprofile}
            resizeMode="contain"
            style={styles.icons}
          />
          <TextInput
            placeholder="Lakshman Singh Lakka"
            style={styles.inputTxt}
          />
        </View>
        <View style={styles.line_container}>
          <Image source={UserProfileIcons.line} style={styles.lineImg} />
        </View>
        {/* line png*/}
        <View style={styles.form}>
          <Image
            source={UserProfileIcons.pancardIcon}
            resizeMode="contain"
            style={styles.icons}
          />
          <TextInput
            placeholder="Lakshman Singh Lakka"
            style={styles.inputTxt}
          />
        </View>
        <View style={styles.form}>
          <Image
            source={UserProfileIcons.gstIcon}
            resizeMode="contain"
            style={styles.icons}
          />
          <TextInput placeholder="ABCD1235G" style={styles.inputTxt} />
        </View>
        <View style={styles.line_container}>
          <Image source={UserProfileIcons.line} style={styles.lineImg} />
        </View>
        <View style={styles.form}>
          <Image
            source={UserProfileIcons.dealerIcon}
            resizeMode="contain"
            style={styles.icons}
          />
          <TextInput placeholder="29 ABCDEFG 2E9" style={styles.inputTxt} />
        </View>
        <View style={styles.form}>
          <Image
            source={UserProfileIcons.discountIcon}
            resizeMode="contain"
            style={styles.icons}
          />
          <TextInput
            placeholder="Lakshman Singh Lakka"
            style={styles.inputTxt}
          />
        </View>
      </View>
      
    </View>
  );
};

export default BusinessProfile;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  heading: {
    marginLeft: 25,
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 3,
  },
  form_container: {
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    elevation: 1,
  },
  form: {
    flexDirection: 'row',
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  icons: {
    width: 23,
    height: 30,
  },
  inputTxt: {
    marginLeft: 10,
    fontSize: 15,
    color: '#888888',
  },
  lineImg: {
    width: '80%',
  },
  line_container: {
    alignItems: 'center',
  },
});
