import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Divider, Drawer, DrawerElement, DrawerItem, IndexPath, DrawerItemProps} from '@ui-kitten/components';
import { Layout, Text} from '@ui-kitten/components';
import { DashboardIcon, TaskIcon, PeopleIcon, GridIcon, PowerIcon, PersonIcon} from './icons';
import { AuthContext } from '../navigation/auth.navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DATA: DrawerItemProps[] = [
  { title: "Toutes vos taches", accessoryLeft: TaskIcon},
  { title: 'Liste des projets', accessoryLeft: DashboardIcon},
  { title: 'Liste des associations', accessoryLeft: PeopleIcon},
  { title: 'Tableau de bord', accessoryLeft: GridIcon},
  { title: 'Mon profil', accessoryLeft: PersonIcon},
];

export const HomeDrawer = ({ navigation, state }: any ): DrawerElement => {
  
  const insets = useSafeAreaInsets();
  const { signOut } = React.useContext(AuthContext);

  const onSignOutPress = (): void => signOut()
  const renderHeader = (): DrawerElement => (
    <Layout
      style={styles.header&&{paddingBottom: insets.bottom}}
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

  const renderFooter = (): DrawerElement => (
      <Layout>
         <DrawerItem 
          title= 'Déconnexion' 
          accessoryLeft= {PowerIcon}
          onPress={onSignOutPress} />
        <Text
          style={styles.profileName}
          category='c2'>
          description
        </Text>
      </Layout>
  );

  return (
    <>
      <Drawer
        selectedIndex={new IndexPath(state.index)}
        header={renderHeader}
        footer={renderFooter}
        onSelect={index => navigation.navigate(state.routeNames[index.row], index.row)}
        children={DATA.map((drawerItemProps ): React.ReactElement =><DrawerItem {...drawerItemProps}/>)}
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
