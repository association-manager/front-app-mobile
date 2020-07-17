import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProjectTasksTabBar } from '../components/project-tasks-tab-bar.component';
import { ProjectTasksGridScreen } from '../screens/project-tasks-grid.screen';
import { ProjectTaskDetailScreen } from '../screens/project-task-detail.screen';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const getHeaderTitle = (route: any) => {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name.toString()
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || 'Tâches projet';

  switch (routeName) {
    case 'À faire':
      return 'Tâches projet à faire';
    case 'En cours':
      return 'Tâches projet en cours';
    case 'Terminée':
      return 'Tâches projet terminée';
  }
}

const ProjectTasksMenuNavigator = (): React.ReactElement => (
<TopTab.Navigator tabBar={(props) => <ProjectTasksTabBar {...props} />}>
  <TopTab.Screen name='À faire' component={ProjectTasksGridScreen}/>
  <TopTab.Screen name='En cours' component={ProjectTasksGridScreen}/>
  <TopTab.Screen name='Terminée' component={ProjectTasksGridScreen}/>
</TopTab.Navigator>
);

export const ProjectTasksNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name='ProjectsTaskMenu' component={ProjectTasksMenuNavigator} 
      options={({ route }) => ({headerTitle: getHeaderTitle(route)})}/>
    <Stack.Screen name='ProjectTaskDetailScreen' component={ProjectTaskDetailScreen}/>
  </Stack.Navigator>
);