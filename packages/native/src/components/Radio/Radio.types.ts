import { ViewStyle, TextStyle, PressableProps } from 'react-native';

export type RadioStyle = {
  container: ViewStyle;
  radio: ViewStyle;
  radioSelected: ViewStyle;
  radioText: TextStyle;
};

export type RadioProps = PressableProps & {
  disabled?: boolean;
  id: string;
  label?: string;
  layout?: 'row' | 'column';
  onPress?: (id: string) => void;
  selected?: boolean;
};
