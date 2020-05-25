import React from 'react';
import { data, AssociationData } from '../services/associationData';
import { AssociationCardList } from '../components/association-card-list-component'; 


export const AssociationsListScreen = ( {navigation, route}: any ): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  const displayAssociationListData: AssociationData[] = data;

  return (
    <AssociationCardList
      data={ displayAssociationListData }
      onItemPress={onItemPress}
      navigation={navigation}/>
  );
};
