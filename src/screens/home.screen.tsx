import React from 'react';
import { Divider, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';
import { MenuIcon } from '../components/icons';

import styles from '../assets/styles/layoutStyle.style';

export const HomeScreen = ({navigation}: any ): React.ReactElement => {

  const onItemPress = (): void => {
    navigation.navigate('Projects');
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );

  return (
    <>
{/*       style={styles.area}
      insets='top'> */}
      <TopNavigation
        title='Associaton Manager'
        leftControl={renderDrawerAction()}
      />
      <Divider/>
      <Button
        onPress= {onItemPress}
      >Go To Project View</Button>
    </>
  );
};
