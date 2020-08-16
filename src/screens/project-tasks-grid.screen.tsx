import React from 'react';
import { ProjectTaskCardList } from '../components/project-task-card-list.component';
import { data, ProjectTaskData } from '../services/ProjectTaskData';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const getHeaderTitle = (route: any) => {
  // Access the tab navigator's state using `route.state`
  const routeName = getFocusedRouteNameFromRoute(route)

  switch (routeName) {
    case 'ProjectTaskDetailScreen':
      return 'Tâches projet à faire';
    case 'En cours':
      return 'Tâches projet en cours';
    case 'Terminée':
      return 'Tâches projet terminée';
  }
}
export const ProjectTasksGridScreen = ( {navigation, route}: any ): React.ReactElement => {
  
  React.useEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  const displayProjectTaskData: ProjectTaskData[] = data.filter(data => data.progress.description === route.name);

  return (
        <ProjectTaskCardList
          data={ displayProjectTaskData }
          onItemPress={onItemPress}
        />
  );
};