import { ButtonHTMLAttributes } from 'react';

export enum Color {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: Color;
};
