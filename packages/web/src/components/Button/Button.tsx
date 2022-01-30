import { FC } from 'react';
import './Button.scss';
import { ButtonProps } from './Button.types';

export enum Color {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

const Button: FC<ButtonProps> = ({
  children,
  color = Color.primary,
  ...rest
}) => {
  return (
    <button {...rest} className={`btn btn--${color}`}>
      {children}
    </button>
  );
};

export default Button;
