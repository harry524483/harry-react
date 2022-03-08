import { StyleSheet } from 'react-native';
import { button } from '@harry-react/design-tokens';
import { Color } from './Button';
import { ButtonStyle, ButtonVarient } from './Button.types';

const {
  ButtonPrimaryBackgroundColor,
  ButtonPrimaryColor,
  ButtonSecondaryBackgroundColor,
  ButtonSecondaryColor,
  ButtonTertiaryBackgroundColor,
  ButtonTertiaryColor,
} = button;

export const buttonVarient: ButtonVarient = {
  primary: {
    button: { backgroundColor: ButtonPrimaryBackgroundColor },
    buttonText: {
      color: ButtonPrimaryColor,
    },
  },
  secondary: {
    button: { backgroundColor: ButtonSecondaryBackgroundColor },
    buttonText: { color: ButtonSecondaryColor },
  },
  tertiary: {
    button: { backgroundColor: ButtonTertiaryBackgroundColor },
    buttonText: { color: ButtonTertiaryColor },
  },
};

const buttonStyle = (color: Color): StyleSheet.NamedStyles<ButtonStyle> => ({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 16 * 3,
    borderRadius: 16 * 10,
    flexGrow: 0,
    ...buttonVarient[color].button,
  },
  buttonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    ...buttonVarient[color].buttonText,
  },
});

export default buttonStyle;
