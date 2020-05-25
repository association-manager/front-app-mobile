import React from 'react';
import { ListRenderItemInfo, Image} from 'react-native';
import { Card, List, ListElement, ListItemElement, ListProps, Text } from '@ui-kitten/components';
import { ImageOverlay } from './image-overlay.component';
import { DashboardItem } from '../models/dashboard-item.model';

import styles from '../assets/styles/dashboard-style.style';

export interface DashboardCardListProps extends Omit<ListProps, 'renderItem'> {
  data: DashboardItem[];
  onItemPress: (index: number) => void;
}

export const DashboardCardList = (props: DashboardCardListProps): ListElement => {

  const { contentContainerStyle, onItemPress, ...listProps } = props;

  const renderItem = (info: ListRenderItemInfo<DashboardItem>): ListItemElement => (
      <Card
        style={styles.item}
        onPress={() => props.onItemPress(info.index)}>
        <ImageOverlay
          style={styles.image}
          source={info.item.image}>
        {info.item.icon(styles.itemIcon)}
        <Text
          style={styles.itemTitle}
          category='s1'>
          {info.item.countItem}
        </Text>
        <Text
          style={styles.itemTitle}
          category='s1'>
          {info.item.title}
        </Text>
        {/* <Text
          style={styles.itemDescription}
          category='c2'>
          {info.item.description}
        </Text> */}
      </ImageOverlay>
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