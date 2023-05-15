import type { ButtonProps } from 'react-native/Libraries/Components/Button';
import type { TextStyle, ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export interface Props extends ButtonProps {
  style?: TextStyle & ViewStyle;
}
