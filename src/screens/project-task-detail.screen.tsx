import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../components/icons';
import ContentView from '../components/project-task-detail.component';
import { useFocusEffect } from '@react-navigation/native';


export const ProjectTaskDetailScreen = ({ navigation }: any): React.ReactElement => {

  useFocusEffect(React.useCallback(()=> navigation.setOptions({title:'tache'}),[navigation]));

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
        accessoryLeft={renderBackAction}
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