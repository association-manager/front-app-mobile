import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Divider, Layout, Text } from '@ui-kitten/components';
import { ImageOverlay } from '../../../components/extra/image-overlay.component';
import { Association } from './extra/data';

const data: Association = Association.defaultAssociation();

export default ({ navigation }): React.ReactElement => {

  const onAllProjectsTaskssView = (): void => {
    navigation && navigation.navigate('AllProjectTasks');
  };

  const onProjectsView = (): void => {
    navigation && navigation.navigate('ProjectListByAssociation');
  };

  return(
    <Layout style={styles.container}>
      <ImageOverlay
        style={styles.headerContainer}
        source={data.image}>
        <Text
          style={styles.headerTitle}
          category='h1'
          status='control'>
          {data.name}
        </Text>
        <Text
          style={styles.headerDescription}
          category='s1'
          status='control'>
          {data.descriptionTitle}
        </Text>
      </ImageOverlay>
      <Layout
        style={styles.contentContainer}
        level='1'>
        <Text>
          {data.description}
        </Text>
      </Layout>
      <Divider/>
      <View style={styles.projectsTasksContainer}>
        <Button
          appearance='ghost'
          status='control'
          onPress={onAllProjectsTaskssView}>
          Tâches des projets
        </Button>
      <Text 
      category='h1'
        style={styles.projectsBetweenTasks}>|</Text>
        <Button
          appearance='ghost'
          status='control'
          onPress={onProjectsView}>
          Liste des projets
        </Button>
      </View>
      <Divider/>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    minHeight: 256,
    paddingVertical: 24,
  },
  headerTitle: {
    textAlign: 'center',
    marginVertical: 24,
    zIndex: 1,
  },
  headerDescription: {
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  authoringInfoContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  projectTasksViewContainer: {
    justifyContent: 'flex-start',
  },
  projectsViewContainer: {
    justifyContent: 'flex-end',
  },
  projectsViewButton: {
    paddingHorizontal: 0,
  },
  projectsBetweenTasks: {
    paddingHorizontal: 'auto',
    paddingVertical: 'auto',
    margin: 'auto',
  },
  projectsTasksContainer: {
    flexDirection: 'row',
  },
});

