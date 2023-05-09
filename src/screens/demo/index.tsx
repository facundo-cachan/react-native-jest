/**
 * Demo Screen
 * Use like template to create news screens
 *
 * @screen
 */

import { Button, Text, View } from 'react-native'

import styles from './styles'

import type { ScreenProps } from 'types'

const DemoScreen: React.FC<ScreenProps> = ({ navigation: { navigate } }: ScreenProps): JSX.Element => (
  <View style={styles.container}>
    <Text>Demo Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigate('Details')} />
  </View>
)

export default DemoScreen
