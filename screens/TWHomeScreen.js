import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import MenuBar from './HomeScreen/Sections/MenuBar';
import Variety from './HomeScreen/Sections/Variety';
import Features from './HomeScreen/Sections/Features';
import MoreBrands from './HomeScreen/Sections/MoreBrands';
import TopBar from '../assets/components/TopBar';

const TWHomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TopBar />
      {/* menubar Section */}
      <MenuBar />
      <Variety />
      <Features />
      <MoreBrands />
    </ScrollView>
  );
};

export default TWHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
});
