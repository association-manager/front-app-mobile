import React from 'react';
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProjectCardList } from '../components/project-card-list.component';
import { ArrowIosBackIcon } from '../components/icons';
import { data } from '../services/projectData';

import styles from '../assets/styles/layoutStyle.style';

export const ProjectsScreen = ({ navigation}: any): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  return (
    <>
{/*       style={styles.container}
      insets='top'> */}
      <TopNavigation
        title='Retour'
        leftControl={renderBackAction()}
      />
      <Divider/>
      <ProjectCardList
        data={data}
        onItemPress={onItemPress}
      />
    </>
  );
};
