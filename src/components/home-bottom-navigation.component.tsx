import React from 'react';
import { BottomNavigationTab, Divider, Text, TextProps } from '@ui-kitten/components';
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
          title={(evaProps) => <Text {...evaProps} style={[evaProps.style, {fontSize: 10}]}>Toutes vos taches</Text>}
          icon={LayoutIcon}
        />
        <BottomNavigationTab
          title={(evaProps) => <Text {...evaProps} style={[evaProps.style, {fontSize: 10}]}>Taches par association(s)</Text>}
          icon={StarOutlineIcon}
        />
        <BottomNavigationTab
          title={(evaProps) => <Text {...evaProps} style={[evaProps.style, {fontSize: 10}]}>Taches par projet(s)</Text>}
          icon={ProjectsIcon}
        />
      </BrandBottomNavigation>
    </>
  );
};
