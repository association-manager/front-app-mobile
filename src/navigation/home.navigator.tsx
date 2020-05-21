import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/home.screen';
import { ProjectTasksNavigator } from './project-tasks.navigator';
import { Icon} from '@ui-kitten/components';
import { ProjectsScreen } from '../screens/projects.screen';
import { HomeToggleDrawerNavBar } from '../components/home-toggleDrawer-nav-bar.component';
import { HomeDrawer } from '../components/home-drawer.component';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeDrawerNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    screenOptions={{ gestureEnabled: false }}
    drawerContent={props => <HomeDrawer {...props}/>}>
    <Stack.Screen name='Accueil' component={HomeScreen}/>
    <Drawer.Screen name='Liste des projets' component={ProjectsScreen}/>
  </Drawer.Navigator>
)

export const HomeNavigator = () => (
  <Stack.Navigator headerMode="float" initialRouteName="Accueil" 
    screenOptions={{
      headerLeft:(props)=>(<HomeToggleDrawerNavBar {...props}/>),
      headerBackImage: ()=>(<Icon name='home-outline' width={24} height={24} marginLeft={12} fill='#3366FF' />),
      headerBackTitleVisible: false}}
  >
    <Stack.Screen name='Accueil' component={HomeScreen}/>
    <Stack.Screen name='Bouton de menu' component={HomeToggleDrawerNavBar}/>
    <Stack.Screen name='Menu de gauche' component={HomeDrawerNavigator}/>
    <Stack.Screen name='Liste des projets' component={ProjectsScreen} options={{title: 'Liste des projets'}} />
    <Stack.Screen name='Tâches projet' component={ProjectTasksNavigator}/> 
  </Stack.Navigator>
);