import { FC, ButtonHTMLAttributes } from 'react';
import './Button.scss';

export enum Color {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: Color;
};

const Button: FC<ButtonProps> = ({ children, color = 'primary', ...rest }) => {
  return (
    <button {...rest} className={`btn btn--${color}`}>
      {children}
    </button>
  );
};

export default Button;
