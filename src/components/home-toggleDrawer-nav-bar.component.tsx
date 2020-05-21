import React from 'react';
import { MenuIcon } from './icons';
import { Button } from '@ui-kitten/components';

export const HomeToggleDrawerNavBar = ({ navigation }: any): React.ReactElement => {
   
  const onButtonPress = (): void => {
    navigation.navigate('Menu de gauche')
  };
  console.log("grioer " + navigation);
  return (
    <Button 
      style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} 
      icon={MenuIcon} 
      onPress={onButtonPress} 
    />
  );
};
