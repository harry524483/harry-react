import React, { FC } from 'react';
import {
  Button as CoreButton,
  ButtonProps as CoreButtonProps,
} from 'react-native';

type ButtonProps = CoreButtonProps;

const Button: FC<ButtonProps> = (props) => {
  return <CoreButton {...props} />;
};

export default Button;
