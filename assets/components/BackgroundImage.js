import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {DealerLogin} from '../images/DealerLogin/DealerLogin';

const BackgroundImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={DealerLogin.TyreImage}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    position: 'relative'
  },
  image: {
    height: '100%',
    width: '60%',
    zIndex: 1,
    end:0,
    position: 'absolute'
},
});
