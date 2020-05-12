import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProjectTasksNavigator } from './project-tasks.navigator';
import { ProjectsScreen } from '../screen/projects.screen';

const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name='Projects' component={ProjectsScreen}/>
    <Stack.Screen name='projectTasks' component={ProjectTasksNavigator}/>
  </Stack.Navigator>
);