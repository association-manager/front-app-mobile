import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../components/icons';
import ContentView from '../layouts/project-task-detail';

export const ProjectTaskDetailScreen = ({ navigation}: any): React.ReactElement => {

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
        title='Blog'
        leftControl={renderBackAction()}
      />
      <ContentView/>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});