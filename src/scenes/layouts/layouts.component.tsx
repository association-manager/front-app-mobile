import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuGridList } from '../../components/menu-grid-list.component';
import { MenuIcon, MessageCircleIcon } from '../../components/icons';
import { data } from './data';

export const LayoutsScreen = (props): React.ReactElement => {

  const onHomeItemPress = (index: number): void => {
    props.navigation.navigate(data[index].route);
  };
  
  const onItemPress = (): void => {
    props.navigation.navigate('ProjectsNavigator');
  };
  
  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );

  const renderChatAction = (navigation): React.ReactElement => (
    <TopNavigationAction
      icon={MessageCircleIcon}
      onPress={() => navigation.navigate('Chat2')}
    />
  );
  
  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='Association Manager'
        leftControl={renderDrawerAction()}
        rightControls={renderChatAction(props.navigation)}
      />
      <Divider/>
      <Button
        onPress= {onItemPress}>
        Espace Projets
      </Button>
      <Divider/>
      <MenuGridList
        data={data}
        onItemPress={onHomeItemPress}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
