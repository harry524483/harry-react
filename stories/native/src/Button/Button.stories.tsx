import { View, StyleSheet } from 'react-native';
import { Story, Meta } from '@storybook/react';
import { Button, Color, ButtonProps } from '@harry-react/native';

export default {
  title: 'ReactNative/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (props) => (
  <View style={styles.container}>
    <Button {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '15%',
  },
});

export const Primary = Template.bind({});
Primary.args = { color: Color.primary, text: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { color: Color.secondary, text: 'Secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { color: Color.tertiary, text: 'Tertiary' };
