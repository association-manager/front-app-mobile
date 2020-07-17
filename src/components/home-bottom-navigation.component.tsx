import React from 'react';
import { BottomNavigationTab, Divider } from '@ui-kitten/components';
import { BrandBottomNavigation } from './brand-bottom-navigation.component';
import { ProjectsIcon, LayoutIcon, StarOutlineIcon } from './icons';
import { useSafeArea } from 'react-native-safe-area-context';



export const HomeBottomNavigation = (props: any): React.ReactElement => {

  const insets = useSafeArea();
  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };

  return (
    <>
      <Divider/>
      <BrandBottomNavigation
        style={{paddingBottom: insets.bottom}}
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab
          title='Toutes vos taches'
          titleStyle={{fontSize: 10}}
          icon={LayoutIcon}
        />
        <BottomNavigationTab
          title='Taches par association(s)'
          titleStyle={{fontSize: 10}}
          icon={StarOutlineIcon}
        />
        <BottomNavigationTab
          title='Taches par projet(s)'
          titleStyle={{fontSize: 10}}
          icon={ProjectsIcon}
        />
      </BrandBottomNavigation>
    </>
  );
};
