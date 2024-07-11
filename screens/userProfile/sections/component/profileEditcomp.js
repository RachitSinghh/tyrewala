import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import { UserProfileIcons } from '../../../../assets/images/ProfileDetailScreen/userProfileIcons'




const ProfileEditcomp = () => {
  return (
    <>
    <View style={styles.EditSection}>
        <View style={styles.firstContainer}>
            <Image source={UserProfileIcons.bprofile} resizeMode='contain' style={styles.icons}/>
        <View style={styles.iconPosition}>
        </View>
        <View style={styles.ThreeObject}>
            <Text style={{marginLeft: 5,fontSize:12}}>Name</Text>
            <TextInput 
                style={styles.inputBox}
                placeholder='Lakshman Singh Lakkha'
            />
           {/* <Image source={UserProfileIcons.line} resizeMode='contain' style={styles.hrLIne} /> */}
        </View>
        </View>
        <View style={styles.firstContainer}>
            <Image source={UserProfileIcons.emailIcon} resizeMode='contain' style={styles.icons}/>
        <View style={styles.iconPosition}>
        </View>
        <View style={styles.ThreeObject}>
            <Text style={{marginLeft: 5,fontSize:12}}>Email Address</Text>
            <TextInput 
                style={styles.inputBox}
                placeholder='Isbisht2014@gmail.com'
            />
           {/* <Image source={UserProfileIcons.line} resizeMode='contain' style={styles.hrLIne} /> */}
        </View>
        </View>
        <View style={styles.firstContainer}>
            <Image source={UserProfileIcons.stateIcon} resizeMode='contain' style={styles.icons}/>
        <View style={styles.iconPosition}>
        </View>
        <View style={styles.ThreeObject}>
            <Text style={{marginLeft: 5,fontSize:12}}>State</Text>
            <TextInput 
                style={styles.inputBox}
                placeholder='Uttar Pradesh'
            />
           {/* <Image source={UserProfileIcons.line} resizeMode='contain' style={styles.hrLIne} /> */}
        </View>
        </View>
        <View style={styles.firstContainer}>
            <Image source={UserProfileIcons.cityIcon} resizeMode='contain' style={styles.icons}/>
        <View style={styles.iconPosition}>
        </View>
        <View style={styles.ThreeObject}>
            <Text style={{marginLeft: 5,fontSize:12}}>City</Text>
            <TextInput 
                style={styles.inputBox}
                placeholder='Ghaziabad'
            />
           {/* <Image source={UserProfileIcons.line} resizeMode='contain' style={styles.hrLIne} /> */}
        </View>
        </View>
    </View>
    
    </>
  )
}

export default ProfileEditcomp

const styles = StyleSheet.create({
    firstContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginVertical: 10,
        marginLeft:  20,

    },
    ThreeObject:{
        flexDirection: 'column',
        alignContent: 'center',
        marginLeft: 10,
        alignItems: 'flex-start',
        marginTop: 10,
        
    },
    icons:{
        width: 35,
        
        top:5
    },
    inputBox:{
        fontSize: 20,
        width: 350,
        padding: 5
        
    },
    iconPosition: {
        alignItems:'center'
    },
    hrLIne:{
        alignItems: 'center',
        position: 'absolute',
        
    }
    
})