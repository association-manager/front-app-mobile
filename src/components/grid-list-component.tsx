import React from 'react';
import { Tab, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { BrandTabBar } from './brand-tab-bar.component';
import { ArrowIosBackIcon, GridIcon, ListIcon } from './icons';

export const GridListComponent = ({ navigation, state } :any): React.ReactElement => {

  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  return (
    <>
      <TopNavigation
        title={state.title}
        leftControl={renderBackAction()}
      />
      <BrandTabBar
        selectedIndex={state.index}
        onSelect={onTabSelect}>
        <Tab icon={GridIcon}/>
        <Tab icon={ListIcon}/>
      </BrandTabBar>
    </>
  );
};
