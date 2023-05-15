import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from '@navigation/AppStackNavigator';

export type Route = {
  // eslint-disable-next-line no-inline-comments
  name: 'Demo' | 'Details'; // should be keyof RootStackParamList
  icon?: string;
};

const routes: Route[] = [
  {
    name: 'Details'
  }
];
const AppNavigation = () => (
  <NavigationContainer>
    <AppStackNavigator routes={routes} />
  </NavigationContainer>
);

export default AppNavigation;
