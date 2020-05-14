import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProjectTasksNavigator } from './project-tasks.navigator';
import { ProjectsScreen } from '../screens/projects.screen';

const Stack = createStackNavigator();


export const ProjectNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name='Projects' component={ProjectsScreen}/>
    <Stack.Screen name='projectTasks' component={ProjectTasksNavigator}/>
  </Stack.Navigator>
);