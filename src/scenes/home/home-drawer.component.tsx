import React from 'react';
import { StyleSheet, View } from 'react-native';

// Deactivation of elements linked to the footer.
import {
  Avatar,
  // Divider,
  Drawer,
  DrawerElement,
  DrawerHeaderElement,
  // DrawerHeaderFooter,
  // DrawerHeaderFooterElement,
  Layout,
  MenuItemType,
  Text,
} from '@ui-kitten/components';
import { GithubIcon, BookIcon, CloseIcon, AwardIcon, HomeIcon } from '../../components/icons';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';

// This import is called to retrieve the version of the application.
// import { AppInfoService } from '../../services/app-info.service';

{/*
  Default List

   const DATA: MenuItemType[] = [
     { title: 'Libraries', icon: GithubIcon },
     { title: 'Documentation', icon: BookIcon },
   ];
  */}


// Start Association List map
const ASSOCIATION: MenuItemType[] = [
  { title: 'Toutes les associations', icon: AwardIcon },
  { title: 'Les restos du coeur', icon: AwardIcon },
  { title: 'Croix-Rouge française', icon: AwardIcon },
  { title: 'Fédération Anglaise de football', icon: AwardIcon },
];
// End Association List map

// Start Project List map
const PROJECT: MenuItemType[] = [
  { title: 'Tous les projets', icon: BookIcon },
  { title: 'Financer la construction d\'un centre de secourisme et de formation', icon: BookIcon },
  { title: 'Coupe d\'Angleterre de football', icon: BookIcon },
  { title: 'Alimentation pour tous', icon: BookIcon },
];
// End Project List map

// Start EmptyData
const EMPTYDATA: MenuItemType[] = [
];
// End EmptyData

// Start LogoutManager
const LOGOUT: MenuItemType[] = [
  { title: 'Déconnexion', icon: CloseIcon },
];
// End LogoutManager

// Start LogoutManager
const BACKTOHOME: MenuItemType[] = [
  { title: 'Accueil', icon: HomeIcon },
];
// End LogoutManager



// Display Version App (disabled), by default it was enabled
// const version: string = AppInfoService.getVersion();

export const HomeDrawer = ({ navigation }): DrawerElement => {

  // Start Association List map Navigation
  const onAssociationSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer();
        navigation.navigate('AssociationList');
        return;
      }
      case 1: {
        navigation.toggleDrawer();
        navigation.navigate('LesRestosDuCoeur');
        return;
      }
      case 2: {
        navigation.toggleDrawer();
        navigation.navigate('CroixRougeFrancaise');
        return;
      }
      case 3: {
        navigation.toggleDrawer();
        navigation.navigate('FederationAnglaiseDeFootball');
        return;
      }
    }
  };
  // End Association List map Navigation


  // Start Project List map Navigation
  const onProjectSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer();
        navigation.navigate('ProjectList');
        return;
      }
      case 1: {
        navigation.toggleDrawer();
        navigation.navigate('CentreDeSecourisme');
        return;
      }
      case 2: {
        navigation.toggleDrawer();
        navigation.navigate('CoupeAngleterreDeFootball');
        return;
      }
      case 3: {
        navigation.toggleDrawer();
        navigation.navigate('AlimentationPourTous');
        return;
      }
    }
  };
  // Start Project List map Navigation

  // Start LogoutManager Navigation Link
  const onLogout = (index: number): void => {
    navigation.toggleDrawer();
    navigation.navigate('SignIn4');
  };
  // End LogoutManager Navigation Link

  // Profile
  const onProfileEdit = (): void => {
    navigation && navigation.navigate('UserProfileEdit');
  };

  // BackToHome
  const onBackToHome = (index: number): void => {
        navigation.toggleDrawer();
        navigation.navigate('AppNavigator');
  };


  const renderHeader = (): DrawerHeaderElement => (
    <Layout
      style={styles.header}
      level='2'>
      <View style={styles.profileContainer}>
        <Avatar
          size='giant'
          source={require('../../assets/images/image-app-icon.png')}
        />
        <Text
          style={styles.profileName}
          category='h6'>
          Nesly PETIT BERT
        </Text>
      </View>
      <View style={styles.profileEditContainer}>
        <Text
          style={styles.profileEdit}
          category='h6'
          onPress={onProfileEdit}>
          Modifier mon profil
        </Text>
      </View>
      <View style={styles.logoutContainer}>
        <Drawer
          data={LOGOUT}
          onSelect={onLogout}
        />
      </View>
      <View style={styles.backToHomeContainer}>
        <Drawer
          data={BACKTOHOME}
          onSelect={onBackToHome}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text
          style={styles.titleStyle}
          category='h5'>
          Tableau de bord
        </Text>
      </View>
    </Layout>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <Drawer
        header={renderHeader}
        data={EMPTYDATA}
        onSelect={null}
      />

      <Text
        style={styles.titleItemStyle}
        category='h5'>
        Association
      </Text>
      <Drawer
        data={ASSOCIATION}
        onSelect={onAssociationSelect}
      />
      <Text
        style={styles.titleItemStyle}
        category='h5'>
        Projet
      </Text>
      <Drawer
        data={PROJECT}
        onSelect={onProjectSelect}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  safeAreaCustom: {
    flex: 0,
  },
  header: {
    height: 'auto',
    paddingTop: 25,
    backgroundColor: '#222B45',
    justifyContent: 'center',
    color: '#FFFFFF',
  },
  profileContainer: {
    height: 70,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
    color: '#FFF',
    letterSpacing: 2,
  },
  profileEditContainer: {
    height: 25,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileEdit: {
    textTransform: 'capitalize',
    color: '#FAFBFC',
    fontWeight: '100',
    letterSpacing: 1,
    fontSize: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  logoutContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  backToHomeContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  titleContainer: {
    height: 45,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#FFF',
  },
  titleStyle: {
    textTransform: 'uppercase',
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 13,
    marginHorizontal: 16,
  },
  titleItemStyle: {
    backgroundColor: '#A7DBFF',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#000',
    fontWeight: '200',
    fontSize: 14,
    padding: 16,
  },
});
