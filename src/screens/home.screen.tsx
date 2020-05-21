import React from 'react';
import { Divider, Button } from '@ui-kitten/components';

import styles from '../assets/styles/layoutStyle.style';

export const HomeScreen = ({navigation}: any ): React.ReactElement => {

  const onItemPress = (): void => {
    navigation.navigate('Liste des projets');
  };



  return (
    <>
{/*       style={styles.area}
      insets='top'> */}
      <Divider/>
      <Button
        onPress= {onItemPress}
      >Go To Project View</Button>
    </>
  );
};
