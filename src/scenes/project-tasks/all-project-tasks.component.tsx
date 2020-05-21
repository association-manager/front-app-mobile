import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native'; //
import {
  Divider,
  List,
  ListItem,
  Text,
  TopNavigation,
  TopNavigationAction,
  useTheme,
} from '@ui-kitten/components';
import { ArrowIosBackIcon, ArrowIosForwardIcon } from '../../components/icons';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { data } from './data';
import { Task } from './type';

export const AllProjectTasksScreen = ({ navigation }): React.ReactElement => {

  const theme = useTheme();

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const renderForwardIcon = (style): React.ReactElement => (
    <ArrowIosForwardIcon
      {...style}
      width='24'
      height='24'
      fill={theme['text-hint-color']}
    />
  );

  const renderItem = (info: ListRenderItemInfo<Task>): React.ReactElement => (
    <ListItem
      style={styles.item}
      title={info.item.title}
      description={info.item.description}
      accessory={renderForwardIcon}
      onPress={onProjectTaskEditFormPress}
    />
  );

  const renderHeader = (): React.ReactElement => (
    <React.Fragment>
      <Text
        style={styles.headerTitle}
        category='s2'>
        Voici la liste des tâches de tous les projets pour l'association sélectionnée (tous status confondus).
      </Text>
      <Divider style={styles.headerDivider}/>
    </React.Fragment>
  );

    const onProjectTaskEditFormPress = (index: number): void => {
      navigation && navigation.navigate('ProjectTaskEditForm');
    };

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='Tâches des projets de cette association'
        leftControl={renderBackAction()}
      />
      <List
        contentContainerStyle={styles.listContent}
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerTitle: {
    paddingHorizontal: 8,
  },
  headerDivider: {
    marginVertical: 8,
  },
  listContent: {
    padding: 8,
  },
  item: {
    marginVertical: 4,
  },
});
