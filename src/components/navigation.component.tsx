import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProjectScreen } from './project/project.component';
import { ProjectDetailsScreen } from './project/project-details.component';
/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent',
  },
};

const { Navigator, Screen } = createStackNavigator();

const ProjectNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Project' component={ProjectScreen}/>
    <Screen name='Project-details' component={ProjectDetailsScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <ProjectNavigator/>
  </NavigationContainer>
);
