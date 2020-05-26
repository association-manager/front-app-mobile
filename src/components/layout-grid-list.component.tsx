import React from 'react';
import { Dimensions, Image, ListRenderItemInfo, StyleSheet } from 'react-native';
import {Card, CardElement, CardHeader, CardHeaderElement, List, ListElement, ListProps, } from '@ui-kitten/components';
import { ProjectTaskItem } from '../models/project-task-item.model';

export interface LayoutGridListProps extends Omit<ListProps, 'renderItem'> {
  data: ProjectTaskItem[];
  onItemPress: (index: number) => void;
}

export type LayoutGridListElement = React.ReactElement<LayoutGridListProps>;

export const LayoutGridList = (props: LayoutGridListProps): ListElement => {

  const { contentContainerStyle, onItemPress, ...listProps } = props;

  const renderItemHeader = (info: ListRenderItemInfo<ProjectTaskItem>): CardHeaderElement => (
    <CardHeader
      style={styles.itemHeader}
      title={info.item.title}
      description={info.item.description}
    />
  );

  const renderItem = (info: ListRenderItemInfo<ProjectTaskItem>): CardElement => (
    <Card
      style={styles.itemContainer}
      header={() => renderItemHeader(info)}
      onPress={() => onItemPress(info.index)}>
      <Image
        style={styles.itemImage}
        source={info.item.image}
      />
    </Card>
  );

  return (
    <List
      {...listProps}
      style={styles.container}
      contentContainerStyle={contentContainerStyle}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  itemHeader: {
    paddingHorizontal: 8,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
  },
  itemImage: {
    height: 276,
    width: '100%',
    resizeMode: 'contain',
  },
});
