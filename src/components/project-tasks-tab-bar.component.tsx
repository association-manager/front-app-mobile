import React from 'react';
import {Tab, TabBar} from '@ui-kitten/components';

import styles from '../assets/styles/layoutItemStyle.style';
export const ProjectTasksTabBar = ({ navigation, state } :any): React.ReactElement => {

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
        <TabBar
            style={styles.container}
            selectedIndex={state.index}
            onSelect={onTabSelect}>
            {state.routeNames.map(renderTab)}
        </TabBar>
    </>
  );
};