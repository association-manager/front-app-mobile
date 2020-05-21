import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Divider, Layout, Text, Button } from '@ui-kitten/components';
import { ImageOverlay } from '../../../components/extra/image-overlay.component';
import { Project } from './extra/data';

const data: Project = Project.alimentationPourTous();


export default ({ navigation }): React.ReactElement => {

  const onProjectTasksView = (): void => {
    navigation && navigation.navigate('ProjectTasks');
  };

  return (
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
          {data.status}
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
      <View style={styles.projectTasksViewContainer}>
        <Button
          style={styles.projectTasksViewButton}
          appearance='ghost'
          status='control'
          onPress={onProjectTasksView}>
          La liste de toutes les tâches
        </Button>
      </View>
      <View style={styles.activityContainer}>
        <Avatar source={data.association.image}/>
        <View style={styles.authoringInfoContainer}>
          <Text>
            {data.association.name}
          </Text>
          <Text
            appearance='hint'
            category='p2'>
            {data.association.createdAt}
          </Text>
        </View>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  projectTasksViewButton: {
    paddingHorizontal: 0,
  },

});

