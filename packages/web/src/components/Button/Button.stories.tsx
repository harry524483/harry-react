import Button from './Button';
import { ButtonProps, Color } from './Button';

export default {
  title: 'React/Button',
  component: Button,
};

const Template = ({ children, ...rest }: ButtonProps) => (
  <Button {...rest}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = { color: Color.primary, children: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { color: Color.secondary, children: 'Secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { color: Color.tertiary, children: 'Tertiary' };
