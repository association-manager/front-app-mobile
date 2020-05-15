import React from 'react';
import { LayoutGridList } from '../components/layout-grid-list.component';
import { data } from '../services/ProjectTaskData';

export const ProjectTasksGridScreen = ({ navigation }: any): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  return (
    <LayoutGridList
      data={data}
      onItemPress={onItemPress}
    />
  );
};
