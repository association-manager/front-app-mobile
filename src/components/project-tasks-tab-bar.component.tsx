import React from 'react';
import {Tab, TabBar} from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../components/icons';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';

//import styles from '../assets/styles/layoutItemStyle.style';

export const ProjectTasksTabBar = ({ navigation, state } :any): React.ReactElement => {

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  const renderTab = (route: string): React.ReactElement => (
    <Tab
      key={route}
      title={route.toUpperCase()}
    />
  );

  return (
    <>
      <TopNavigation
      title='Retour'
      leftControl={renderBackAction()}
      />
      <TabBar
          //style={styles.container}
          selectedIndex={state.index}
          onSelect={onTabSelect}>
          {state.routeNames.map(renderTab)}
      </TabBar>
    </>
  );
};