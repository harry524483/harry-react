import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

const colorPrimary = '#55c57a';
const colorSecondary = '#ffb900';
const colorTertiary = '#2998ff';
const white = '#fff';
const black = '#000';

export const Color = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

export type ButtonStyle = {
  button: ViewStyle | TextStyle;
  buttonText: TextStyle;
};

type ButtonVarient = { [key: string]: ButtonStyle };

export const buttonVarient: ButtonVarient = {
  [Color.primary]: {
    button: { backgroundColor: colorPrimary },
    buttonText: {
      color: white,
    },
  },
  [Color.secondary]: {
    button: { backgroundColor: colorSecondary },
    buttonText: { color: black },
  },
  [Color.tertiary]: {
    button: { backgroundColor: colorTertiary },
    buttonText: { color: white },
  },
};

const buttonStyle = (color: string): StyleSheet.NamedStyles<ButtonStyle> => ({
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
