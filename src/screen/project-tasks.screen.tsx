import React from 'react';
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
//import { SafeAreaLayout } from '../components/safe-area-layout.component';
import { MenuGridList } from '../components/menu-grid-list.component';
import { MenuIcon } from '../components/icons';
import { data } from '../layouts/projects/projectData';
import styles from '../assets/styles/layoutStyle.style';

export const ProjectTasksScreen = (props: { navigation: any }): React.ReactElement => {

  const onItemPress = (index: number): void => {
    props.navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
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
      <MenuGridList
        data={data}
        onItemPress={onItemPress}
      />
    </>
  );
};