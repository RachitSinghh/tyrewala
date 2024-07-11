import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {UserProfileIcons} from '../../../assets/images/ProfileDetailScreen/userProfileIcons';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Information</Text>

      <View style={styles.form_container}>
        <View style={styles.form}>
          <Image
            source={UserProfileIcons.emailIcon}
            resizeMode="contain"
            style={styles.icons}
          />
          <TextInput
            placeholder="singhrachit@outlook.in"
            style={styles.placeholderTxt}
          />
        </View>
        <View style={styles.form}>
          <Image
            source={UserProfileIcons.phoneIcon}
            resizeMode="contain"
            style={styles.icons}
          />
          <TextInput placeholder="9891698978" style={styles.placeholderTxt} />
        </View>
      </View>
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editBtn_txt}>Edit Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    
    marginBottom: 20,
  },
  heading: {
    marginLeft: 30,
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 3,
  },
  form_container: {
    backgroundColor: 'white',
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
  placeholderTxt: {
    left: 15,
  },
  editBtn: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: 2,
  },
  editBtn_txt: {
    color: '#46aef7',
    fontSize: 15,
  },
});
