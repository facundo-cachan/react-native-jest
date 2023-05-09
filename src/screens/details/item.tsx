/**
 * Item Screen
 *
 * @screen
 */

import { Button, Text, View } from 'react-native'

import styles from './styles'

import type { ScreenPropsDetails } from 'types'

const ItemScreen: React.FC<ScreenPropsDetails> = (
  {
    navigation: { goBack },
    route: { params: { itemId } }
  }: ScreenPropsDetails
): JSX.Element => (
  <View styles={styles.container}>
    <Text>Item Screen { itemId }</Text>
    <Button
      title="Go back"
      onPress={() => goBack()} />
  </View>
)

export default ItemScreen
