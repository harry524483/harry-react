import { FC } from 'react';
// import './Button.scss';

import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ children, ...remainingProps }) => {
  return (
    <button {...remainingProps} className="btn">
      {children}
    </button>
  );
};

export default Button;
