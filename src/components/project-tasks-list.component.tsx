import React from 'react';
import { LayoutList } from './layout-list.component';
import { data } from '../layouts/project-tasks-list/data';

export const ProjectTasksListScreen = ({ navigation }: any): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  return (
    <LayoutList
      data={data}
      onItemPress={onItemPress}
    />
  );
};
