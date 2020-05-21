import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProjectTasksTabBar } from '../components/project-tasks-tab-bar.component';
import { ProjectTasksGridScreen } from '../screens/project-tasks-grid.screen';
import { ProjectTaskDetailScreen } from '../screens/project-task-detail.screen';


const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


const ProjectTasksMenuNavigator = (): React.ReactElement => (
<TopTab.Navigator tabBar={(props) => <ProjectTasksTabBar {...props} />}>
  <TopTab.Screen name='À faire' component={ProjectTasksGridScreen}/>
  <TopTab.Screen name='En cours' component={ProjectTasksGridScreen}/>
  <TopTab.Screen name='Termineé' component={ProjectTasksGridScreen}/>
</TopTab.Navigator>
);

export const ProjectTasksNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='ProjectsTaskMenu' component={ProjectTasksMenuNavigator}/>
    <Stack.Screen name='ProjectTaskDetailScreen' component={ProjectTaskDetailScreen}/>
  </Stack.Navigator>
);
