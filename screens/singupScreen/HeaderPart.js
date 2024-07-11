import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import logo from '../../assets/images/Logo/drawable-hdpi/logo.png';



const HeaderPart = () => {
  return (
   <View style={styles.introContainer}>
          <Image source={logo} style={styles.imgLogo} resizeMode="contain" />
          <Text adjustsFontSizeToFit={true} style={styles.introText}>
            Dealers Registration
          </Text>
          <Text style={styles.subHeading}>
            Create an account to Tyre Waala to get all features
          </Text>
        </View>
  )
}

export default HeaderPart

const styles = StyleSheet.create({
introContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  imgLogo: {
    width: '100%',
    padding: 60,
  },
  introText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  subHeading: {
    color: '#888888',
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'semibold',
  },

})