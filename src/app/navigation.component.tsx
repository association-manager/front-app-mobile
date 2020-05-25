import 'react-native-gesture-handler';
import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from '../navigation/home.navigator';

import { dark as appDarkTheme } from '@eva-design/eva';
import { AuthNavigator } from '../navigation/auth.navigation';


const evaDarkTheme = {
  ...appDarkTheme
}
/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
    ...DarkTheme,
  colors: {
   ...DarkTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent'
  },
};

export const AppNavigator = () => (
  <NavigationContainer theme={navigatorTheme}  >
    {/* <HomeNavigator /> */}
    <AuthNavigator/>
  </NavigationContainer>
);
