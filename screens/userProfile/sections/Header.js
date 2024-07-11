import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {UserProfileIcons} from '../../../assets/images/ProfileDetailScreen/userProfileIcons';

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Image
            source={UserProfileIcons.headerimg2}
            style={styles.coverimage}
          />

          <TouchableOpacity>
            <View style={styles.profile}>
              <Image
                source={UserProfileIcons.bgCircle}
                resizeMode="contain"
                style={styles.profile_bg}
              />

              <Image
                source={UserProfileIcons.profile}
                resizeMode="contain"
                style={styles.profil_pic}
              />

              <View style={styles.miniCamera_container}>
                <Image
                  source={UserProfileIcons.bgCircle}
                  resizeMode="contain"
                  style={styles.miniCamera_bg}
                />

                <Image
                  source={UserProfileIcons.uploadImg}
                  resizeMode="contain"
                  style={styles.upload_plus}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Laxman Singh</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 2,
    flexWrap: 'wrap',
    alignContent: 'center',
    marginBottom: 25,
  },
  header_container: {
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },
  profile: {
    alignItems: 'center',
  },
  coverimage: {
    borderTopLeftRadius: 20,
    width: 400,
    height: 100,
  },
  profil_pic: {
    width: 50,
    position: 'absolute',
    bottom: -55,
    alignSelf: 'center'
  },
  profile_bg: {
    width: 80,
    position: 'absolute',
    bottom: -10,
  },
  name: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
  miniCamera_container:{
    left: 8,
    padding: 1,
    width: 10
  },
  miniCamera_bg: {
    width: 26,
    height: 45,
    position: 'absolute',
    bottom: -20,
    left: 8,

  },
  upload_plus: {
    width: 20,
    position: 'absolute',
    bottom: -15,
    left: 11,
  },
});
