import { Button, ButtonProps, Color } from '@harry-react/web';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'React/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = { color: Color.primary, children: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { color: Color.secondary, children: 'Secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { color: Color.tertiary, children: 'Tertiary' };
