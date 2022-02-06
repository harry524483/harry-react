import { Button, ButtonProps, Color } from '@harry-react/web';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'React/Button',
  component: Button,
  parameters: {
    snackPlayer: {
      component: (
        <div
          data-snack-code="console.log('hello%20world')%3B"
          data-snack-dependencies="expo-constants%2Clodash%404"
          data-snack-name="My%20Snack"
          data-snack-description="My%20Amazing%20Snack"
          data-snack-preview="true"
          data-snack-platform="ios"
          style={{ overflow: 'hidden', height: '600px' }}
        />
      ),
    },
  },
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
