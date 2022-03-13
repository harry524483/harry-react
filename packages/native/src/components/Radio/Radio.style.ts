import { healthforce } from '@harry-react/design-tokens';

import { StyleSheet } from 'react-native';
import { RadioStyle } from './Radio.types';

const {
  RadioHeight,
  RadioWidth,
  RadioBorderWidth,
  RadioBorderColor,
  RadioDisabledBorderColor,
  RadioSelectedBackgroundColor,
  RadioSelectedHeight,
  RadioSelectedWidth,
  RadioSelectedDisabledBackgroundColor,
  Spacing2,
} = healthforce;

const radioStyle = (disabled: boolean): StyleSheet.NamedStyles<RadioStyle> => ({
  container: { alignItems: 'center', flexDirection: 'row' },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: disabled ? RadioDisabledBorderColor : RadioBorderColor,
    borderWidth: RadioBorderWidth,
    width: RadioWidth,
    height: RadioHeight,
    borderRadius: RadioHeight / 2,
  },
  radioSelected: {
    backgroundColor: disabled
      ? RadioSelectedDisabledBackgroundColor
      : RadioSelectedBackgroundColor,
    width: RadioSelectedWidth,
    height: RadioSelectedHeight,
    borderRadius: RadioSelectedHeight / 2,
  },
  radioText: { margin: Spacing2 },
});

export default radioStyle;
