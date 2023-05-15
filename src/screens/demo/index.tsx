/**
 * Demo Screen
 * Use like template to create news screens
 *
 * @screen
 */

import { useState } from 'react';
import { View } from 'react-native';

import { Buttons, Inputs, Text } from '@components';
import styles from './styles';

import type { ScreenProps } from 'types';

const DemoScreen: React.FC<ScreenProps> = ({
  navigation: { navigate }
}: ScreenProps): JSX.Element => {
  const [username, setUserName] = useState('');
  return (
    <View style={styles.container}>
      <Text.Default>Demo Screen</Text.Default>
      <Inputs.Default
        value={username}
        placeholder="User Name"
        type="default"
        onChangeText={(t: string) => setUserName(t)}
      />
      <Buttons.Default title="Go to Details" onPress={() => navigate('Details')} />
    </View>
  );
};

export default DemoScreen;
