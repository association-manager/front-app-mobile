import React from 'react';
import { ProjectTaskCardList } from '../components/project-task-card-list.component';
import { data, ProjectTaskData } from '../services/ProjectTaskData';


export const ProjectTasksGridScreen = ( {navigation, route}: any ): React.ReactElement => {

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