import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBarContent from './SideBarContent';
import TWHomeScreen from '../../TWHomeScreen';
import MenuBar from '../Sections/MenuBar';

const sideBar = createDrawerNavigator();

const Drawer = () => {
  return (
    <NavigationContainer>
      <sideBar.Navigator drawerContent={props => <SideBarContent {...props} />}>
        <sideBar.Screen name="MenuBar" component={MenuBar} />
      </sideBar.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
