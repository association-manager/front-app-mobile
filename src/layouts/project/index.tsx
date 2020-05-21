import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Avatar, Card, Layout, List, Text } from '@ui-kitten/components';
import { Project } from './extra/data';

const data: Project[] = [
  Project.centreSecourisme(),
  Project.coupeAngleterredeFootball(),
  Project.alimentationPourTous(),
];

export default ({ navigation }): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation && navigation.navigate('DefaultProjectDetails');
  };


  const renderItemHeader = (info: ListRenderItemInfo<Project>): React.ReactElement => (
    <ImageBackground
      style={styles.itemHeader}
      source={info.item.image}
    />
  );

  const renderItemFooter = (info: ListRenderItemInfo<Project>): React.ReactElement => (
    <View style={styles.itemFooter}>
      <Avatar source={info.item.association.image}/>
      <View style={styles.itemAuthoringContainer}>
        <Text
          category='s2'>
          {info.item.association.name}
        </Text>
        <Text
          appearance='hint'
          category='c1'>
          {info.item.association.createdAt}
        </Text>
      </View>
    </View>
  );

  const renderItem = (info: ListRenderItemInfo<Project>): React.ReactElement => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(info)}
      footer={() => renderItemFooter(info)}
      onPress={() => onItemPress(info.index)}>
      <Text category='h5'>
        {info.item.name}
      </Text>
      <Text
        style={styles.itemContent}
        appearance='hint'
        category='s1'>
        {`${info.item.description.substring(0, 82)}...`}
      </Text>
    </Card>
  );

  return (
    <Layout
      style={styles.container}
      level='2'>
      <List
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={data}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
  },
  itemHeader: {
    height: 220,
  },
  itemContent: {
    marginVertical: 8,
  },
  itemFooter: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  itemAuthoringContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

