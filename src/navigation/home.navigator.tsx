
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LayoutsNavigator } from './layouts.navigator';
import { HomeDrawer } from '../scenes/home/home-drawer.component';

{/* New entiries */}
  

import { ProjectNavigator } from './projects.navigator';


const Drawer = createDrawerNavigator();

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ['Home', 'Layouts']; 

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    screenOptions={{ gestureEnabled: false }}
    drawerContent={props => <HomeDrawer {...props}/>}>
    <Drawer.Screen name='Home' component={LayoutsNavigator}/>

    {/* New entiries */}
    
    
    <Drawer.Screen name='ProjectsNavigator' component={ProjectNavigator}/>

    
  </Drawer.Navigator>
);
