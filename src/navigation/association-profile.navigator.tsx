import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AssociationProfileScreen } from '../screens/association-profile.screen'; 

const Stack = createStackNavigator();


export const AssociationProfileNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='AssociationProfileScreen' component={AssociationProfileScreen} options={{title: 'Profile de l\'association'}}/>
  </Stack.Navigator>
);
