import { Text } from 'react-native';

import styles from './styles';

import type { Props } from './types';

const Default = ({ children, style }: Props) => (
  <Text style={[styles.baseText, style]}>{children}</Text>
);

export default Default;
