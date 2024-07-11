import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {UserProfileIcons} from '../../../assets/images/ProfileDetailScreen/userProfileIcons';
const OfficeInfo = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Office Address</Text>
      <View style={styles.inputcontainer}>
        <View style={styles.form_container}>
          <Image
            source={UserProfileIcons.shopIcon}
            resizeMode="contain"
            style={styles.icons}
          />
          <TextInput
            placeholder="B-179/J, First Floor,
Ramprastha, Ghaziabad
Uttar Pradesh - 201011"
            multiline
            style={styles.inputTxt}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editBtn_txt}>Edit Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OfficeInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  heading: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 3,
  },
  inputcontainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    elevation: 1,
  },
  form_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  icons: {
    width: 25,
    height: 23,
  },
  inputTxt: {
    fontSize: 15,
    marginLeft: 10,
    width: '100%',
    color: '#888888',
  },
  editBtn: {
    alignItems: 'flex-end',
    marginRight: 35,
    marginTop: 2,
  },
  editBtn_txt: {
    color: '#46aef7',
    fontSize: 15,
  },
});
