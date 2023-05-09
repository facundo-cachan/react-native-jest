import { createNativeStackNavigator } from '@react-navigation/native-stack'

import type { Screen } from 'types'

const screensDetails = [
  {
    name: 'Home',
    screen: require('../screens/details/').default,
  },
  {
    name: 'Item',
    screen: require('../screens/details/item').default,
  },
]

const Stack = createNativeStackNavigator()
console.log({ screensDetails })
const DetailsStack = () => (
  <Stack.Navigator initialRouteName="Details">
    {screensDetails.map(({ name, screen, title }: Screen, index: number) => {
      const options = title ? { title } : { headerShown: false, }
      return (
        <Stack.Screen
          key={index}
          name={name}
          component={screen}
          options={options}
        />
      )
    })}
  </Stack.Navigator>
)
export default DetailsStack
