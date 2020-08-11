import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Card, CardElement, List, ListElement, ListProps, Text, Button } from '@ui-kitten/components';
import { Association } from '../models/association-item.model';
import { ImageOverlay } from '../components/image-overlay.component';
import { InfoIcon } from './icons';

import {styles} from '../assets/styles/AssociationCardStyle';


export interface AssociationCardListProps extends Omit<ListProps, 'renderItem'> {
  data: Association[];
  onItemPress: (index: number) => void;
  navigation: any;
}

export type AssociationCardListElement = React.ReactElement<AssociationCardListProps>;
/**
 * Displays all associations that have one or more projects of all statuses combined.
 * @param props 
 */
export const AssociationCardList = (props: AssociationCardListProps): ListElement => {

  const { contentContainerStyle, onItemPress, ...listProps} = props;

  const onAssociationProjectButtonPress = (): void => {
    props.navigation.navigate('Liste des projets');
  };

  const onAssociationMoreDetailsButtonPress = (): void => {
    props.navigation.navigate("Profile de l'association");
  };

  const renderItem = (info: ListRenderItemInfo<Association>): CardElement => (
    
    <Card {...listProps} style={styles.container} onPress={() => onItemPress(info.index)}>
      <ImageOverlay style={styles.file} source={info.item.file.fileFind.url}>
        <Text style={styles.itemAssociationType} category='s1' status='control'>
          {info.item.associationType}
          {/* {info.item.associationProfile.profileDetail.descriptionTitle} */}
        </Text>
        <Text style={styles.title} category='h4' status='control'>
          {info.item.name}
        </Text>
        <Button style={styles.linkAssociationProfile}
        appearance={'ghost'}
        onPress={onAssociationProjectButtonPress}>
          {"Projets de cette association"}
        </Button>
        <Button style={styles.moreInfoRiht} size='tiny' accessoryLeft={InfoIcon} status='success'
        onPress={onAssociationMoreDetailsButtonPress}>
           {"En savoir plus"}
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
