import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HomeAssets} from '../../../assets/images/HomeScreenAssets/HomeAssets';





const MenuBar = ({navigation}) => {
  return (
    <>
      <View style={styles.navigation}>
        <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={HomeAssets.profile}
                resizeMode="contain"
                style={styles.profile}
              />
              <Image
                source={HomeAssets.navi}
                resizeMode="contain"
                style={styles.hamburger}
              />
            </TouchableOpacity>
        
        </View>
        <Text style={styles.helloThere}>Hello There!</Text>
      </View>
    </>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    justifyContent: 'flex-start',
  },
  profile: {
    width: 60,
    height: 50,
  },
  helloThere: {
    fontSize: 30,
    fontWeight: '350',
    color: 'black',
    marginLeft: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    width: '15%',
    justifyContent: 'center',
    marginLeft: 10,
  },
  hamburger: {
    position: 'absolute',
    height: 20,
    width: 20,
    right: 0,
    bottom: 0,
  },
});
