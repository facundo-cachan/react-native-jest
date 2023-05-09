import type { TextStyle, ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import type { TextProps } from 'react-native/Libraries/Text/Text'

export interface Props extends TextProps {
  children: unknown
  style?: TextStyle & ViewStyle
}
