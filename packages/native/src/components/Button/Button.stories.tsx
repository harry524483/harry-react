import Button from './Button';
import { colorPrimary } from './Button.style';

export default {
  title: 'ReactNative/Button',
  component: Button,
};

export const Primary = (args: any) => <Button {...args} />;

Primary.args = {
  text: 'Primary',
  color: colorPrimary,
};
