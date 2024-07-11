import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {HomeAssets} from '../../../assets/images/HomeScreenAssets/HomeAssets';

const MoreBrands = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.Heading}>More brands requested</Text>
      </View>
      <View style={styles.brandContainer}>
        
        <View style={styles.logoContainer}>
          <Image
            source={HomeAssets.metroTyres}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
       
        <View style={styles.logoContainer}>
          <Image
            source={HomeAssets.maxxis}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
       
        <View style={styles.logoContainer}>
          <Image
            source={HomeAssets.bedRock}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      
        <View style={styles.logoContainer}>
          <Image
            source={HomeAssets.dolphine}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      </View>

      <View style={styles.brandContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={HomeAssets.kohinoor}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={HomeAssets.kelly}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={HomeAssets.jktyre}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={HomeAssets.apollo}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      </View>
    </>
  );
};

export default MoreBrands;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00',
    padding: 10,
    marginTop: 20,
    marginBottom: 15,
  },
  Heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  logo:{
    width: 70,
    height: 70,
  },
  brandContainer:{
    flex:1,
    flexDirection: 'row',
    width: "100%",
    height: "100%",
    justifyContent: 'space-evenly',
    padding: 5,
  },
  logoContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
},


});