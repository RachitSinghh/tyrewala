import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {UserProfileIcons} from '../../assets/images/ProfileDetailScreen/userProfileIcons';
import UserInfo from './sections/userInfo';
import Header from './sections/Header';
import BusinessProfile from './sections/BusinessProfile';
import OfficeInfo from './sections/officeInfo';


const UserProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity>
        <Image
          source={UserProfileIcons.leftArrow}
          resizeMode="contain"
          style={styles.backBtn}
        />
        </TouchableOpacity>

        <Text style={styles.profileTxt}> Profile </Text>
      
      <TouchableOpacity style={styles.logoutBtn}>
        <Image
          source={UserProfileIcons.logout}
          resizeMode="contain"
          style={styles.lgBtnLogo}
          
        />
      </TouchableOpacity>
      
      </View>


     <Header />
      {/* <UserInfo /> */}
      <UserInfo />
      <BusinessProfile />
      <OfficeInfo />

    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topSection: {
 
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    // justifyContent: 'space-between',
    marginBottom: 10,
    
  },
  backBtn: {
    width: 25,
  },
  profileTxt: {
    fontSize: 30,
    fontWeight: '400',
    color: 'black',
    marginLeft: 25,
  },
 
  logoutBtn: {
    width: 25,
    position: 'absolute',
    right:0
  },
  lgBtnLogo:{
    width:25,
    
  },

});
