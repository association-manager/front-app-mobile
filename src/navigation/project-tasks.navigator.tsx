import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GridListComponent } from '../components/grid-list-component';
import { ProjectTasksGridScreen } from '../components/project-tasks-grid.component';
import { ProjectTasksListScreen } from '../components/project-tasks-list.component';
import { ProjectTaskDetailScreen } from '../screen/project-task-detail.screen';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const ProjectsMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <GridListComponent {...props}/>}>
    <TopTab.Screen name='ProjectsGrid' component={ProjectTasksGridScreen}/>
    <TopTab.Screen name='ProjectsList' component={ProjectTasksListScreen}/>
  </TopTab.Navigator>
);

export const ProjectTasksNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='ProjectsTask' component={ProjectsMenuNavigator}/>
    <Stack.Screen name='ProjectTaskDetailScreen' component={ProjectTaskDetailScreen}/>

  </Stack.Navigator>
);