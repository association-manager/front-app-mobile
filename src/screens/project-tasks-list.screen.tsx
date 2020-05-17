import React from 'react';
import { LayoutList } from '../components/layout-list.component';
import { data, ProjectTaskData } from '../services/ProjectTaskData';

export const ProjectTasksListScreen = ({ navigation }: any): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  const displayProjectTaskData: ProjectTaskData[] = data.filter(data => data.progress.description === navigation.name);

  return (
    <LayoutList
      data={displayProjectTaskData}
      onItemPress={onItemPress}
    />
  );
};
