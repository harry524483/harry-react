import { FC } from 'react';
import './Button.scss';

import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ children, color = 'primary', ...rest }) => {
  return (
    <button {...rest} className={`btn btn--${color}`}>
      {children}
    </button>
  );
};

export default Button;
