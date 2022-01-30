import { View } from 'react-native';
import { Story, Meta } from '@storybook/react';
import Button, { Color } from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'ReactNative/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (props) => (
  <View>
    <Button {...props} />
  </View>
);

export const Primary = Template.bind({});
Primary.args = { color: Color.primary, text: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { color: Color.secondary, text: 'Secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { color: Color.tertiary, text: 'Tertiary' };
