import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProjectsScreen } from '../screens/projects.screen';
import { HomeScreen } from '../screens/home.screen';

const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Projects' component={ProjectsScreen}/>
  </Stack.Navigator>
);