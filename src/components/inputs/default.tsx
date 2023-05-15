import { TextInput } from 'react-native';

import styles from './styles';

import type { Props } from './types';

const Default = ({
  accessibilityLabel,
  onChangeText,
  style,
  value,
  placeholder,
  type = 'default'
}: Props) => (
  <TextInput
    accessibilityLabel={accessibilityLabel ?? placeholder}
    style={[styles.baseText, style]}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    keyboardType={type}
  />
);

export default Default;
