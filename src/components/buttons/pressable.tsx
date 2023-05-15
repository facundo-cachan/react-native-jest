import { Pressable as Press, Text } from 'react-native';

import styles from './styles';

import type { ButtonProps } from 'react-native/Libraries/Components/Button';
import type { TextStyle, ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type PressableProps = ButtonProps & {
  title?: string;
  style: {
    container?: ViewStyle;
    text?: TextStyle;
  };
};

const Pressable = ({
  accessibilityLabel,
  title,
  style,
  onPress
}: PressableProps): React.JSX.Element => (
  <Press
    accessibilityRole='button'
    accessibilityLabel={accessibilityLabel ?? title}
    onPress={onPress}
    style={[styles.pressable, style?.container]}
  >
    <Text style={[styles.text, style?.text]}>{title}</Text>
  </Press>
);

export default Pressable;
