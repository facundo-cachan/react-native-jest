/**
 * Details Screen
 *
 * @screen
 */

import { Button, Text, View } from 'react-native';

import styles from './styles';

import type { ScreenPropsDetails } from 'types';

const DetailsScreen: React.FC<ScreenPropsDetails> = ({
  navigation: { navigate }
}: ScreenPropsDetails): JSX.Element => (
  <View styles={styles.container}>
    <Text>Details Screen</Text>
    <Button title="Go to Item" onPress={() => navigate('Item', { itemId: 31 })} />
  </View>
);

export default DetailsScreen;
