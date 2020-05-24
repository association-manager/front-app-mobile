import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Divider, Drawer, DrawerElement, DrawerHeaderElement, DrawerHeaderFooter} from '@ui-kitten/components';
import { DrawerHeaderFooterElement, Layout, MenuItemType, Text } from '@ui-kitten/components';
import { DashboardIcon, TaskIcon, PeopleIcon, GridIcon} from './icons';

const DATA: MenuItemType[] = [
  { title: 'Toutes vos taches', icon: TaskIcon},
  { title: 'Liste des projets', icon: DashboardIcon},
  { title: 'Liste des associations', icon: PeopleIcon},
  { title: 'Tableau de bord', icon: GridIcon},
];

export const HomeDrawer = ({ navigation }: any ): DrawerElement => {

  const onItemSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer();
        navigation.navigate('Ecran accueil');
        navigation.setOptions({title: DATA[0].title});
        return;
      }
      case 1: {
        navigation.toggleDrawer();
        navigation.navigate('Liste des projets');
        navigation.setOptions({title: DATA[1].title});
        return;
      }
      case 2: {
        navigation.toggleDrawer();
        navigation.navigate('Liste des associations');
        navigation.setOptions({title: DATA[2].title});
        return;
      }
      case 3: {
        navigation.toggleDrawer();
        navigation.navigate('Tableau de bord');
        navigation.setOptions({title: DATA[3].title});
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
