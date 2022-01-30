import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

export const colorPrimary = '#55c57a';
const colorSecondary = '#ffb900';
const colorTertiary = '#2998ff';

type ButtonStyle = {
  button: ViewStyle | TextStyle;
  buttonText: TextStyle;
  buttonContainer: ViewStyle;
};

const buttonStyle: StyleSheet.NamedStyles<ButtonStyle> = {
  button: {
    paddingVertical: 16,
    paddingHorizontal: 16 * 3,
    borderRadius: 16 * 10,
    alignSelf: 'flex-start',
    flexGrow: 0,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
};

export default buttonStyle;
