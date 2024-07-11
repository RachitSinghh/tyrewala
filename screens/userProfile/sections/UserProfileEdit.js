import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {UserProfileIcons} from '../../../assets/images/ProfileDetailScreen/userProfileIcons';
import ProfileEditcomp from './component/profileEditcomp';
const UserProfileEdit = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <View style={styles.backBtn_container}>
          <TouchableOpacity>
            <Image
              source={UserProfileIcons.backBtn}
              resizeMode="contain"
              style={styles.backBtn}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topContainer_text}>
          <View style={styles.hr} />
        </View>
        <Text style={{color: 'white', fontSize: 18}}>Enter Details</Text>
      </View>
      <View style={styles.mainSection}>
        <ProfileEditcomp />
       
       <View style={styles.btn_container}>

      <TouchableOpacity style={styles.updateBtn}> 
        <Text style={styles.btnText}>UPDATE CHANGES</Text>
      </TouchableOpacity>
       </View>
      </View>

    </View>
  );
};

export default UserProfileEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1716',
    height: 50,
  },
  backBtn: {
    width: 20,
    marginLeft: 12,
  },
  topContainer_text: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  hr: {
    borderWidth: 0.7,
    borderColor: '#88888',
    marginRight: 10,
    height: 50,
    marginLeft: 10,
  },
  mainSection: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 50,
    marginLeft: 50,
    marginTop: 20,
    
  },
  updateBtn:{
    backgroundColor: '#46aef7',
    width:300,
    height:70,
    flexDirection: 'row',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    marginBottom: 10,
  },
  btnText: {
    fontSize: 30, 
    color: "white",
    fontWeight: 'bold'
  },
  btn_container:{
    flexDirection: 'column',
    padding: 10,
    marginTop: 10,
    alignItems:'center',
    justifyContent: 'center'
  }

 

});
