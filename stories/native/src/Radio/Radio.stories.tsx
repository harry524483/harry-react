import { View, StyleSheet } from 'react-native';
import { Story, Meta } from '@storybook/react';
import { Radio, RadioProps } from '@harry-react/native';

export default {
  title: 'ReactNative/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (props) => (
  <View style={styles.container}>
    <Radio {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '15%',
  },
});

export const Primary = Template.bind({});
Primary.args = { selected: false, label: 'Hello', disabled: false };
