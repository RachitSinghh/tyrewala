import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import React from 'react'

const TopBar = () => {
  return (
   <StatusBar
   barStyle={"default"}
    hidden= {false}
    backgroundColor={"#393534"}
    translucent={true}
   />
  )
}

export default TopBar

const styles = StyleSheet.create({})

/*

-> The statusbar in mobile app plays crucial role in providing users with essential information and maintaining a consistent user experience. 

-> Status bar is the area at the top of the screen on mobile devices that displays information such as the time, battery level, network etc etc



*/