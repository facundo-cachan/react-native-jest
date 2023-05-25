import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from '@testing-library/react-native';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import renderer from 'react-test-renderer';

type Props = {
  component: JSX.Element;
  name: string;
};

const logError = (error: Error, info: { componentStack: string }) => {
  // Do something with the error, e.g. log to an external API
  // eslint-disable-next-line no-restricted-syntax, no-console
  console.log(error, info);
};
const toJSON = (component: Props['component']) => {
  renderer.create(component).toJSON();
  return render(component);
};
const App = (props: Props) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: true
        }}
      >
        <Stack.Screen {...props} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const renderNavigator = (props: Props) =>
  render(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ErrorBoundary FallbackComponent='Something went wrong' onError={logError}>
      <App {...props} />
    </ErrorBoundary>
  );

export * from '@testing-library/react-native';
export { App, renderNavigator as render, toJSON };
