import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home.screen';
import { ProjectTasksNavigator } from './project-tasks.navigator';
import { ProjectNavigator } from './projects.navigator';

const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='ProjectsNavigator' component={ProjectNavigator}/>
  </Stack.Navigator>
);