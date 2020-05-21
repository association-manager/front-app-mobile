import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet } from 'react-native';
import { Card, Layout, List, Text } from '@ui-kitten/components';
import { Association } from './extra/data';

const data: Association[] = [
  Association.lesRestosDuCoeur(),
  Association.federationAnglaiseDeFoorball(),
  Association.croixRougeFrancaise(),
];

export default ({ navigation }): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation && navigation.navigate('DefaultAssociation');
  };

  const renderItemHeader = (info: ListRenderItemInfo<Association>): React.ReactElement => (
    <ImageBackground
      style={styles.itemHeader}
      source={info.item.image}
    />
  );
  const renderItem = (info: ListRenderItemInfo<Association>): React.ReactElement => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(info)}
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
