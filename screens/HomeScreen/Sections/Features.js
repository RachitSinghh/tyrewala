import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {HomeAssets} from '../../../assets/images/HomeScreenAssets/HomeAssets';

const Features = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.tagLine}>With handy features like</Text>
        <View style={styles.featureSection}>
          <View style={styles.featureLogo}>
            <Image
              source={HomeAssets.tyreReg}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <View style={styles.featureLogo}>
            <Image
              source={HomeAssets.claimSettle}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <View style={styles.featureLogo}>
            <Image
              source={HomeAssets.outStanding}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <View style={styles.featureLogo}>
            <Image
              source={HomeAssets.rewards}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Features;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagLine: {
    fontSize: 22,
    fontWeight: '350',
    color: 'black',
  },
  featureSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  featureLogo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
