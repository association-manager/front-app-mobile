import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LayoutsScreen } from '../scenes/layouts/layouts.component';
import { Chat2Screen } from './../scenes/messaging/chat-2.component';

const Stack = createStackNavigator();

export const LayoutsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Layouts' component={LayoutsScreen}/>
    <Stack.Screen name='Chat2' component={Chat2Screen}/>
  </Stack.Navigator>
);
