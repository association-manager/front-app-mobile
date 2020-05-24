import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from '../screens/dashboard.screen';

const Stack = createStackNavigator();


export const DashboardNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Tableau de bord' component={DashboardScreen} options={{title: 'Tableau de bord'}}/>
  </Stack.Navigator>
);