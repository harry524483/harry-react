import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import buttonStyle from './Button.style';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
};

const styles = StyleSheet.create(buttonStyle);

const Button = ({ text, onPress, color, textColor }: ButtonProps) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, !!color && { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);

export default Button;
