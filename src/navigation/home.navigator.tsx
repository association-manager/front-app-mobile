import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabNavigationOptions, createBottomTabNavigator,} 
from '@react-navigation/bottom-tabs';
import { ProjectTasksNavigator } from './project-tasks.navigator';
import { AssociationsListNavigator } from './associations-list.navigator';
import { AssociationProfileNavigator } from './association-profile.navigator';
import { Button, TopNavigationAction} from '@ui-kitten/components';
import { ProjectsScreen } from '../screens/projects.screen';
import { HomeDrawer } from '../components/home-drawer.component';
import { HomeBottomNavigation } from '../components/home-bottom-navigation.component';
import { MenuIcon, ArrowIosBackIcon } from '../components/icons';
import { DrawerActions } from '@react-navigation/native';
import { DashboardNavigator } from './dashboard-app.navigator';
import { UserProfileScreen } from '../screens/user-profile.screen';
import { ProjectTasksAssoNavigator } from './project-tasks-asso.navigator';
import { ProjectTasksProNavigator } from './project-tasks-pro.navigator';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ['ProjectsTaskMenu'];

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
    drawerContent={(props: any) => <HomeDrawer {...props}/>}>
    <Drawer.Screen name='Accueil' component={HomeTabsNavigator}/>
    <Drawer.Screen name='Liste des projets' component={ProjectsScreen} options={{title: 'Liste des projets'}}/>
    <Drawer.Screen name='Liste des associations' component={AssociationsListNavigator} 
      options={{title: 'Liste des associations'}}/>
    <Drawer.Screen name="Profile de l'association" component={AssociationProfileNavigator} 
      options={{title: "Profile de l'association"}}/>
    <Drawer.Screen name='Tableau de bord' component={DashboardNavigator} options={{title: 'Tableau de bord'}}/>
    <Drawer.Screen name='Mon profil' component={UserProfileScreen} options={{title: 'Mon profil'}}/>
    <Stack.Screen name='Tâches projet' component={ProjectTasksNavigator} 
      options={({ navigation })=>({
        headerLeft:()=> 
        <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} 
          icon={ArrowIosBackIcon}
          onPress={()=>navigation.goBack()}/>
      })}
    /> 
  </Drawer.Navigator>
)

const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    tabBar={props => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name='Toutes vos taches' component={ProjectTasksNavigator}/>
    <BottomTab.Screen name='Taches par association(s)' component={ProjectTasksAssoNavigator}/>
    <BottomTab.Screen name='Taches par projet(s)' component={ProjectTasksProNavigator}/>
{/*     <BottomTab.Screen name='Accueil latérale' component={HomeDrawerNavigator}/> */}
  </BottomTab.Navigator>
);


export const HomeNavigator = () => (
  <Stack.Navigator headerMode="float" initialRouteName="HomeDrawerNavigator" 
    screenOptions={({navigation}) => ({
      title: 'Toutes vos taches',
      headerLeft:() => <TopNavActionButton {...navigation}/>,
      headerBackTitleVisible: false
    })}>
    <Drawer.Screen name='HomeDrawerNavigator' component={HomeDrawerNavigator}/>
  </Stack.Navigator>
);