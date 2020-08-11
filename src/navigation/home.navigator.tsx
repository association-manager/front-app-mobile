import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabNavigationOptions, createBottomTabNavigator, }
  from '@react-navigation/bottom-tabs';
import { ProjectTasksNavigator } from './project-tasks.navigator';
import { Button, TopNavigationAction } from '@ui-kitten/components';
import { ProjectsScreen } from '../screens/projects.screen';
import { HomeDrawer } from '../components/home-drawer.component';
import { HomeBottomNavigation } from '../components/home-bottom-navigation.component';
import { MenuIcon, ArrowIosBackIcon } from '../components/icons';
import { DrawerActions } from '@react-navigation/native';
import { UserProfileScreen } from '../screens/user-profile.screen';
import { ProjectTasksAssoNavigator } from './project-tasks-asso.navigator';
import { ProjectTasksProNavigator } from './project-tasks-pro.navigator';
import { UserLoginScreen } from '../screens/user-login.screen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DashboardScreen } from '../screens/dashboard.screen';
import { AssociationsListScreen } from '../screens/associations-grid.screen';
import { AssociationProfileScreen } from '../screens/association-profile.screen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ['ProjectsTaskMenu'];



const getHeaderTitle = (route: RouteProp<any, any>) => {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Accueil';

  switch (routeName) {
    case 'Accueil':
      return 'Toutes vos taches';
    case 'Liste des projets':
      return 'Liste des projets';
    case 'Liste des associations':
      return 'Liste des associations';
    case 'Tableau de bord':
      return 'Tableau de bord';
    case 'Mon profil':
      return 'Mon profil';
    case 'UserLoginPage':
      return 'Connexion';
    case 'Tâches projet':
      return 'Tâches projet';
    case "Profile de l'association":
      return "Profile de l'association";

  }
}

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  console.log(currentRoute.name)
  return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({ route }: any): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return { tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute) };
};

const TopNavActionButton = (navigation: any) => (
  <TopNavigationAction
    style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
    icon={MenuIcon}
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
  />
);

const HomeDrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{ swipeEnabled: false }}
    drawerContent={(props: any) => <HomeDrawer {...props} />}>
    <Drawer.Screen name='Accueil' component={HomeTabsNavigator} />
    <Drawer.Screen name='Liste des projets' component={ProjectsScreen} />
    <Drawer.Screen name='Liste des associations' component={AssociationsListScreen}
      options={{ title: 'Liste des associations' }} />
    <Drawer.Screen name='Tableau de bord' component={DashboardScreen} />
    <Drawer.Screen name='Mon profil' component={UserProfileScreen} />
    <Stack.Screen name='UserLoginPage' component={UserLoginScreen} />
    <Stack.Screen name='Tâches projet' component={ProjectTasksNavigator}
      options={({ navigation }) => ({
        headerLeft: () =>
          <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
            accessoryLeft={ArrowIosBackIcon}
            onPress={() => navigation.goBack()} />
      })}
    />
    <Drawer.Screen name="Profile de l'association" component={AssociationProfileScreen}
      options={{ title: "Profile de l'association" }} />

  </Drawer.Navigator>
)

const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    tabBar={props => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name='Toutes vos taches' component={ProjectTasksNavigator} />
    <BottomTab.Screen name='Taches par association(s)' component={ProjectTasksAssoNavigator} />
    <BottomTab.Screen name='Taches par projet(s)' component={ProjectTasksProNavigator} />
    {/*     <BottomTab.Screen name='Accueil latérale' component={HomeDrawerNavigator}/> */}
  </BottomTab.Navigator>
);


export const HomeNavigator = () => (
  <Stack.Navigator headerMode="float" initialRouteName="HomeDrawerNavigator"
    screenOptions={({ navigation, route }) => ({
      headerLeft: () => <TopNavActionButton {...navigation} />,
      headerTitle: getHeaderTitle(route)
    })}>
    <Stack.Screen name='HomeDrawerNavigator' component={HomeDrawerNavigator} />
  </Stack.Navigator>
);