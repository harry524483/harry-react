import { View } from 'react-native';
import Button, { ButtonProps } from './Button';
import { Color } from './Button.style';

export default {
  title: 'ReactNative/Button',
  component: Button,
};

const Template = (props: ButtonProps) => (
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
