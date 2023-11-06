import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { FontFamily } from '../../../assets/fonts/FontFamily';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      {props.buttonText && (
        <Text style={{color: '#fff',fontFamily:FontFamily.TTCommonsRegular}}>{props.buttonText}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});

Button.defaultProps = {
  onPress: () => {
    alert('Hemu');
  },
  buttonText: 'Button',
  height: 40,
  width: '50%',
  backgroundColor: '#673AB7',
};
