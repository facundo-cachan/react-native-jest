import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { render } from '@testing-library/react-native'
import { ErrorBoundary } from 'react-error-boundary'
import renderer from 'react-test-renderer'

import DemoScreen from '@screens/Demo'

type Props = {
  component: JSX.Element
  name?: string
}

const logError = (error: Error, info: { componentStack: string }) => {
  // Do something with the error, e.g. log to an external API
  console.log(error, info)
}
const Stack = createNativeStackNavigator()

const toJSON = (
  component: Props['component'],
) => {
  renderer.create(component).toJSON()
  return render(component)
}
const App = ({ component = DemoScreen, name = 'Demo' }: Props) => (
    <NavigationContainer>
      <Stack.Navigator
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: true,
          unmountOnBlur: true,
        }}>
        <Stack.Screen
          component={component}
          name={name}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
)
const renderNavigator = (props: Props) =>
  render(
    // @ts-ignore
    <ErrorBoundary FallbackComponent="Something went wrong" onError={logError}>
      <App {...props} />
    </ErrorBoundary>,
  )

export * from '@testing-library/react-native'
export { App, toJSON, renderNavigator as render }

