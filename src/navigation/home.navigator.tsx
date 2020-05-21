import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProjectTasksNavigator } from './project-tasks.navigator';
import { Button, TopNavigationAction} from '@ui-kitten/components';
import { ProjectsScreen } from '../screens/projects.screen';
import { HomeDrawer } from '../components/home-drawer.component';
import { MenuIcon, ArrowIosBackIcon } from '../components/icons';
import { DrawerActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
    drawerContent={props => <HomeDrawer {...props}/>}>
    <Drawer.Screen name='Ecran accueil' component={ProjectTasksNavigator}/>
    <Drawer.Screen name='Liste des projets' component={ProjectsScreen}/>
  </Drawer.Navigator>
)

export const HomeNavigator = () => (
  <Stack.Navigator headerMode="float" initialRouteName="Accueil" 
    screenOptions={({navigation}) => ({
      title: 'Toutes vos taches',
      headerLeft:() => <TopNavActionButton {...navigation}/>,
      headerBackTitleVisible: false  })}>
    <Stack.Screen name='Accueil' component={HomeDrawerNavigator}/>
    <Stack.Screen name='Liste des projets' component={ProjectsScreen} options={{title: 'Liste des projets'}}/>
    <Stack.Screen name='Tâches projet' component={ProjectTasksNavigator} 
      options={({ navigation })=>({
        headerLeft:()=> 
        <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} 
          icon={ArrowIosBackIcon}
          onPress={()=>navigation.goBack()}/>
      })}
    /> 
  </Stack.Navigator>
);