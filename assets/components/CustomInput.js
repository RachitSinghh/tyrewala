import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {forwardRef} from 'react';

const CustomInput = forwardRef(
  (
    {
      icon,
      value,
      onChangeText,
      placeholder,
      keyboardType,
      secureTextEntry,
      returnKeyType,
      onSubmitEditing,
      blurOnSubmit,
      style,
      iconStyle,
      placeholderTextColor
    },
    ref,
  ) => {
    return (
      <View style={[styles.container, style]}>
        <Image
          source={icon}
          resizeMode="contain"
          style={[styles.icon, iconStyle]}
        />
        <TextInput
          style={[styles.input,style]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          ref={ref}
        />
      </View>
    );
  },
);

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginHorizontal: 50,
    width: "80%",
    height: 50,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderColor: '#eeeded',
    borderWidth: 2,
    borderColor: '#eeeded',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    
  },
  icon: {
    width: 30,
    height: 30,
  },
});
