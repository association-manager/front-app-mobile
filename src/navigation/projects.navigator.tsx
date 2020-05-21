import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProjectsScreen } from '../screens/projects.screen';
import { ProjectTasksNavigator } from './project-tasks.navigator';

const Stack = createStackNavigator();


export const ProjectNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Projects' component={ProjectsScreen}/>
    <Stack.Screen name='ProjectTasksNavigator' component={ProjectTasksNavigator}/>
  </Stack.Navigator>
);
