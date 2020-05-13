import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn4Screen } from '../components/sign-in-4.component';
import { ForgotPasswordScreen } from '../components/forgot-password.component';
import { HomeNavigator } from './home.navigator';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='SignIn4' component={SignIn4Screen}/>
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
{/*     <Stack.Screen name='ChangeProfile' component={ChangeProfileScreen}/>
    <Stack.Screen name='Profile' component={ProfileScreen}/> */}
    <Stack.Screen name='AppNavigator' component={HomeNavigator}/>
  </Stack.Navigator>
);
