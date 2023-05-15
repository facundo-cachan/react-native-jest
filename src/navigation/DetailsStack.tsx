import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { Screen } from 'types';

const screensDetails = [
  {
    name: 'Home',
    screen: require('../screens/details/').default
  },
  {
    name: 'Item',
    screen: require('../screens/details/item').default
  }
];

const Stack = createNativeStackNavigator();
const DetailsStack = () => (
  <Stack.Navigator initialRouteName="Details">
    {screensDetails.map(({ name, screen, title }: Screen, index: number) => (
      <Stack.Screen
        key={index}
        name={name}
        component={screen}
        options={title ? { title } : { headerShown: false }}
      />
    ))}
  </Stack.Navigator>
);
export default DetailsStack;
