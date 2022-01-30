import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import buttonStyle, { Color } from './Button.style';

export type ButtonProps = TouchableOpacityProps & {
  text: string;
  color?: string;
};

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
