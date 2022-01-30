import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import buttonStyle from './Button.style';
import { ButtonProps } from './Button.types';

export enum Color {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

const Button = ({
  text,
  onPress,
  color = Color.primary,
  ...rest
}: ButtonProps) => {
  const styles = StyleSheet.create(buttonStyle(color));

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
