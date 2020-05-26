import React from 'react';
import {Tab, TabBar, Layout} from '@ui-kitten/components';

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
    <Layout>
      <TabBar
          selectedIndex={state.index}
          onSelect={onTabSelect}>
          {state.routeNames.map(renderTab)}
      </TabBar>
    </Layout>
  );
};