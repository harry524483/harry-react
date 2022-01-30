import { StyleSheet } from 'react-native';
import { Color } from './Button';
import { ButtonStyle, ButtonVarient } from './Button.types';

const colorPrimary = '#55c57a';
const colorSecondary = '#ffb900';
const colorTertiary = '#2998ff';
const white = '#fff';
const black = '#000';

export const buttonVarient: ButtonVarient = {
  primary: {
    button: { backgroundColor: colorPrimary },
    buttonText: {
      color: white,
    },
  },
  secondary: {
    button: { backgroundColor: colorSecondary },
    buttonText: { color: black },
  },
  tertiary: {
    button: { backgroundColor: colorTertiary },
    buttonText: { color: white },
  },
};

const buttonStyle = (color: Color): StyleSheet.NamedStyles<ButtonStyle> => ({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 16 * 3,
    borderRadius: 16 * 10,
    alignSelf: 'flex-start',
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
