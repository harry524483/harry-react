import { ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';
import { Color } from './Button';

export type ButtonStyle = {
  button: ViewStyle | TextStyle;
  buttonText: TextStyle;
};

export type ButtonVarient = { [key: string]: ButtonStyle };

export type ButtonProps = TouchableOpacityProps & {
  text: string;
  color?: Color;
};
