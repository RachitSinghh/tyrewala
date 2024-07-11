import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HorizontalLine = ({style}) => {
    return <View style={[styles.hr,style]} />
}

export default HorizontalLine

const styles = StyleSheet.create({
    hr:{
        borderBottomColor: '#888888',
        borderBottomWidth: 1, 
        marginVertical: 5,
        width: "80%",
    }
})