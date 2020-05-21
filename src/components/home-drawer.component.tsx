import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Divider, Drawer, DrawerElement, DrawerHeaderElement, DrawerHeaderFooter} from '@ui-kitten/components';
import { DrawerHeaderFooterElement, Layout, MenuItemType, Text } from '@ui-kitten/components';
import { BookIcon, GithubIcon } from './icons';

const DATA: MenuItemType[] = [
  { title: 'Libraries', icon: GithubIcon },
  { title: 'Documentation', icon: BookIcon },
];


export const HomeDrawer = ({ navigation }: any ): DrawerElement => {

  const onItemSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer();
        navigation.navigate('Libraries');
        return;
      }
      case 1: {
        navigation.toggleDrawer();
        return;
      }
    }
  };

  const renderHeader = (): DrawerHeaderElement => (
    <Layout
      style={styles.header}
      level='2'>
      <View style={styles.profileContainer}>
        <Avatar
          size='giant'
          source={require('../assets/images/image-app-icon.png')}
        />
        <Text
          style={styles.profileName}
          category='h6'>
          Association Manger
        </Text>
      </View>
    </Layout>
  );

  const renderFooter = (): DrawerHeaderFooterElement => (
    <React.Fragment>
      <Divider/>
      <DrawerHeaderFooter
        disabled={true}
        description="description"
      />
    </React.Fragment>
  );

  return (
    <>
      <Drawer
        header={renderHeader}
        footer={renderFooter}
        data={DATA}
        onSelect={onItemSelect}
      />
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});