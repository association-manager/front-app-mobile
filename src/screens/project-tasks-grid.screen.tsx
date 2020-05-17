import React from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import { ProjectTaskCardList } from '../components/project-task-card-list.component';
import { data, ProjectTaskData } from '../services/ProjectTaskData';

export const ProjectTasksGridScreen = ( {navigation, route}: any ): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };
 
/*   var newArr = Object.keys(route);
  var mappedArr = newArr.map(function(i) {
    return [i, route[i]];
  });
  console.log(`Route Name of Project task screen : ${mappedArr}`); */

  const displayProjectTaskData: ProjectTaskData[] = data.filter(data => data.progress.description === route.name);

  return (
    <>
    <ProjectTaskCardList
      data={ displayProjectTaskData }
      onItemPress={onItemPress}
    />
    
    </>
  );
};
