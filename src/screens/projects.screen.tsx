import React from 'react';
import { Divider } from '@ui-kitten/components';
import { ProjectCardList } from '../components/project-card-list.component';
import { data } from '../services/projectData';

import styles from '../assets/styles/layoutStyle.style';

export const ProjectsScreen = ({ navigation}: any): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  return (
    <>
{/*       style={styles.container}
      insets='top'> */}
      <Divider/>
      <ProjectCardList
        data={data}
        onItemPress={onItemPress}
      />
    </>
  );
};
