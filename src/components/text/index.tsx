import { Text as RNText, StyleSheet } from 'react-native'

import type { Props } from './interfaces'

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
const Text = ({ children, style }: Props) => (
  <RNText style={[styles.baseText, style]}>
    {children}
  </RNText>
)

export default Text