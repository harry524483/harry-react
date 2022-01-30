import { ButtonHTMLAttributes } from 'react';

import { Color } from './Button';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: Color;
};
