import React from 'react';
import { ListRenderItemInfo, Image} from 'react-native';
import { Card, List, ListElement, ListItemElement, ListProps, Text } from '@ui-kitten/components';
import { ImageOverlay } from '../layouts/projects/extra/image-overlay.component';
import { ProjectItem } from '../model/project-item.model';

import styles from '../assets/styles/layoutItemStyle.style';

export interface ProjectCardListProps extends Omit<ListProps, 'renderItem'> {
  data: ProjectItem[];
  onItemPress: (index: number) => void;
}

export const ProjectCardList = (props: ProjectCardListProps): ListElement => {

  const { contentContainerStyle, onItemPress, ...listProps } = props;

  const renderItem = (info: ListRenderItemInfo<ProjectItem>): ListItemElement => (
      <Card
        style={styles.item}
        onPress={() => props.onItemPress(info.index)}>
        <ImageOverlay
          style={styles.image}
          source={info.item.image}>
        {info.item.icon(styles.itemImage)}
        <Text
          style={styles.itemTitle}
          category='s1'>
          {info.item.title}
        </Text>
        <Text
          style={styles.itemDescription}
          category='c2'>
          {info.item.description}
        </Text>
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
