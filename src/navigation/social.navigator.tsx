import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Profile7Screen } from '../scenes/profile7/profile-7.component';

import { Chat2Screen } from '../scenes/messaging/chat-2.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const SocialNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Profile7' component={Profile7Screen}/>

    <Stack.Screen name='Chat2' component={Chat2Screen}/>
  </Stack.Navigator>
);
