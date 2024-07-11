import {Image, View, StyleSheet} from 'react-native';
import React from 'react';

import TWsplash from '../assets/images/TWsplash.png';
import Power from '../assets/images/Power/drawable-xhdpi/power.png';
// import SvgComponent from '../assets/images/Svg/Power';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={TWsplash} style={styles.logo} />
      <View style={styles.footerContainer}>
        <Image source={Power} style={styles.footer} resizeMode="contain" />
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e6e7e2',
  },
  footerContainer: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginLeft: 50,
  },
  footer: {
    width: '100%',
  },
});
