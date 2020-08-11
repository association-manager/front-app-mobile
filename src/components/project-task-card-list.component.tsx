import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import moment from 'moment';
import { Card, CardElement, List, ListElement, ListProps, Text, Button } from '@ui-kitten/components';
import { ProjectTaskItem } from '../models/project-task-item.model';
import { ImageOverlay } from '../components/image-overlay.component';
import { ClockIcon } from './icons';

import {styles} from '../assets/styles/projectTaskCardStyle';


export interface ProjectTaskCardListProps extends Omit<ListProps, 'renderItem'> {
  data: ProjectTaskItem[];
  onItemPress: (index: number) => void;
}

export type ProjectTaskCardListElement = React.ReactElement<ProjectTaskCardListProps>;
/**
 * Display tasks list on layout
 * @param props 
 */
export const ProjectTaskCardList = (props: ProjectTaskCardListProps): ListElement => {


  const { contentContainerStyle, onItemPress, ...listProps} = props;

  const renderItem = (info: ListRenderItemInfo<ProjectTaskItem>): CardElement => (
    
    <Card {...listProps} style={styles.container} onPress={() => onItemPress(info.index)}>
      <ImageOverlay style={styles.image} source={info.item.image}>
        <Text style={[styles.level, { color: info.item.progress.color }]} category='s1' status='control'>
          {info.item.progress.description}
        </Text>
        <Text style={styles.title} category='h4' status='control'>
          {info.item.title}
        </Text>
        <Text style={styles.itemDescription} appearance='hint'>
          {info.item.description}
        </Text>
        <Button style={styles.dateEndRight} size='tiny' accessoryLeft={ClockIcon} status='success'>
           {"Date de fin : " + info.item.endDate}
        </Button>
      </ImageOverlay>
    </Card>);

  return (
    <List
      {...listProps}
      style={styles.container}
      contentContainerStyle={contentContainerStyle}
      renderItem={renderItem}
    />
  );
};
