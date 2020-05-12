import React from 'react';
import { ListRenderItemInfo, Image} from 'react-native';
import { Card, List, ListElement, ListItemElement, ListProps, Text } from '@ui-kitten/components';
import { ProjectItem } from '../models/project-item.model';

import styles from '../styles/layoutItemStyle.style';

export interface MenuGridListProps extends Omit<ListProps, 'renderItem'> {
  data: ProjectItem[];
  onItemPress: (index: number) => void;
}

export const MenuGridList = (props: MenuGridListProps): ListElement => {

  const { contentContainerStyle, onItemPress, ...listProps } = props;

  const renderItem = (info: ListRenderItemInfo<ProjectItem>): ListItemElement => (
    <Card
      style={styles.item}
      onPress={() => props.onItemPress(info.index)}>
      {info.item.icon({ width: 64, height: 64, alignSelf: 'center' })}
      <Text
        style={styles.itemTitle}
        category='s2'>
        {info.item.title}
      </Text>
      <Text
        style={styles.itemDescription}
        appearance='hint'>
        {info.item.description}
      </Text>
      <Image
        style={styles.itemImage}
        source={info.item.image}
      />
    </Card>
  );


  return (
    <List
      {...listProps}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};