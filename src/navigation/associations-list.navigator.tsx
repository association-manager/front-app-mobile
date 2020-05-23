import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AssociationsListScreen } from '../screens/associations-grid.screen';

const Stack = createStackNavigator();


export const AssociationsListNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='AssociationsListScreen' component={AssociationsListScreen} options={{title: 'Liste des associations'}}/>
  </Stack.Navigator>
);