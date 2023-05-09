import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { lazy } from 'react'
import { Button } from 'react-native'

import DemoScreen from '@screens/demo/'

import type { ParamListBase } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { Route } from '.'

const screens: { [x: string]: Pick<Route, 'name'> } = {
  Details: lazy(() => import('./DetailsStack')),
},
  Stack = createNativeStackNavigator(),
  headerScreen = ({ navigation: { navigate } }: NativeStackScreenProps<ParamListBase>) => ({
    headerBackVisible: false,
    headerTitle: () => <></>,
    headerLeft: () => <></>,
    headerRight: () => (
      <Button
        accessibilityLabel="Learn more about this purple button"
        onPress={() => navigate('Demo')}
        title="Demo"
        color="#841584"
      />
    ),
  })

export default function AppStackNavigator({ routes }: { routes: Route[] }) {
  console.log(routes, routes.length > 0)
  return (
    <Stack.Navigator
      initialRouteName="Demo"
      detachInactiveScreens={true}
      /* barStyle={{ paddingBottom: 48 }} */
      screenOptions={{
        unmountOnBlur: true,
        headerShown: true,
        /* header: () => <Appbar />, */
      }}>
      <Stack.Screen name="Demo" component={DemoScreen} options={{ headerShown: false }} />
      {routes.length > 0 &&
        routes.map(({ name }: Pick<Route, 'name'>, index) => {
          console.log({ name })
          return (
            <Stack.Screen
              key={index}
              name={name}
              options={headerScreen}
              component={screens[name]}
            />
          )
        })}
    </Stack.Navigator>
  )
}
